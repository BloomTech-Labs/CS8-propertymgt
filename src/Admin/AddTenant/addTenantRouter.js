const dd = require('../../Config/AwsConfig');
const hashingId = require('../../Common/HashingId');

// TODO: Do not push stripe key to github
const stripe = require('stripe')(process.env.STRIPE_SECRET);

const getStripeCustomer = (req, res) => {
  stripe.customers.retrieve(req.params.id, (err, customer) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: 'stripe error' });
    } else {
      console.log(customer);
      res.status(200).json({ status: 'customer retrieved', customer });
    }
  });
};

// Add a new tenant and creates a LS_DB item with property, contract, and tenant info
// Tenant should have tenantId, propertyId, (stripe customer id)
const addTenant = (req, res) => {
  console.log(req.body);
  const CCToken = req.body.cardToken.token;

  const {
    T1Name,
    T1Phone,
    T1Email,
    T1NotiP,
    T1NotiE,
    T2Name,
    T2Phone,
    T2Email,
    T2NotiP,
    T2NotiE,
    StartD, // same start date for both tenants
    EndD, // same end date for both tenants
    propertyId,
  } = req.body;

  // Create the cc information here
  // STRIPE FIRST METHOD
  stripe.customers.create(
    {
      // Add Tenant Route, Stripe First so we can give stripeID to new Tenant
      description: T1Name,
      email: T1Email,
    },
    (customerErr, customer) => {
      // console.log('customer is created here -->', customer);
      if (customerErr) res.status(500).json({ status: 'stripe customer error', customerErr });
      else {
        stripe.customers.createSource(
          customer.id,
          {
            source: CCToken.id,
          },
          (stripeSourceErr, card) => {
            if (stripeSourceErr) res.status(500).json({ status: 'source Error', card });
            else {
              const params = {
                TableName: 'Tenants',
                Item: {
                  tenantId: hashingId(),
                  propertyId,
                  stripeId: customer.id, // StripeID needed to check data in Stripe DB. Created from line 60
                  NameT: T1Name,
                  MobileT: T1Phone,
                  EmailT: T1Email,
                  GetTextsT: T1NotiP,
                  GetEmailT: T1NotiE,
                  StartD,
                  EndD,
                  WOrder: [],
                  Admin: '123',
                },
              };
              const params2 = {
                TableName: 'Tenants',
                Item: {
                  tenantId: hashingId(),
                  propertyId: params.Item.propertyId,
                  NameT: T2Name,
                  MobileT: T2Phone,
                  EmailT: T2Email,
                  GetTextsT: T2NotiP,
                  GetEmailT: T2NotiE,
                  StartD,
                  EndD,
                  WOrder: [],
                  Admin: '123',
                },
              };
              dd.put(params, (dbError) => {
                if (dbError) {
                  console.log('this is params -->', params, '\nthis is dbError -->', dbError);
                  res.status(300).json({ status: 'db Error', dbError });
                } else {
                  stripe.subscriptions.create(
                    {
                      customer: customer.id,
                      items: [
                        {
                          plan: params.Item.propertyId,
                        },
                      ],
                    },
                    (subErr, subscription) => {
                      if (subErr) {
                        console.log(subErr);
                        res.status(400).json({ status: 'subscription error', subscription });
                      } else {
                        console.log('subscription created');
                        // res.status(200).json({ status: 'Create Tenant Complete!', subscription });
                        const updateParams = {
                          TableName: 'Properties',
                          Key: {
                            propertyId,
                          },
                          ExpressionAttributeNames: {
                            '#TID': 'tenantId',
                            '#TN': 'tenantName',
                            '#SD': 'tenantStartDate',
                            '#ED': 'tenantEndDate',
                          },
                          ExpressionAttributeValues: {
                            ':tid': params.Item.tenantId,
                            ':tn': params.Item.NameT,
                            ':sd': params.Item.StartD,
                            ':ed': params.Item.EndD,
                          },
                          UpdateExpression: 'SET #TID = :tid, #TN = :tn, #SD = :sd, #ED = :ed',
                          ReturnValues: 'UPDATED_NEW',
                        };

                        dd.update(updateParams, (updateErr, data) => {
                          if (updateErr) {
                            console.log(updateErr);
                            res.status(500).json({ status: 'Property Update Error', data });
                          } else {
                            console.log('Properties Updated!!');
                            res.status(200).json({ status: 'Properties Updated!', data });
                          }
                        });
                      }
                    }
                  );
                  dd.put(params2, (dbError) => {
                    if (dbError) {
                      console.log('this is params2 -->', params2, '\nthis is dbError -->', dbError);
                      res.status(300).json({ status: 'db Error', dbError });
                    } else {
                      console.log('params2 in dd.put -->', params2);
                    }
                  });
                }
              });
            }
          }
        );
      }
    }
  );

  // DB FIRST METHOD

  // dd.put(params, (error) => {
  //   if (error) res.status(400).json({ error });
  //   // else res.status(200).json({ status: 'Success..' });
  //   // ************************************************
  //   // STRIPE INTEGRATION
  //   // ************************************************
  //   else {
  //     stripe.customer.create(
  //       {
  //         description: params.Item.tenantId,
  //         email: params.Item.EmailT,
  //       },
  //       (stripeCustErr, customer) => {
  //         if (stripeCustErr) {
  //           res.status(500).json({ status: 'stripe customer error', stripeCustErr });
  //         } else {
  //           stripe.subscriptions.create(
  //             {
  //               customer: customer.id,
  //               items: [
  //                 {
  //                   plan: '123 fake st', // Add Property Address as plan ID
  //                 },
  //               ],
  //             },
  //             (subErr, subscription) => {
  //               if (subErr) res.status(500).json({ status: 'subscription error', subErr });
  //               else {
  //                 res.status(200).json({ status: 'new tenant added successfully', subscription });
  //               }
  //             }
  //           );
  //         }
  //       }
  //     );
  //   }
  // });
};

// TODO: GET ADMIN ID
// Sends all id's to LSDB
const lsdb = (req, res) => {
  const { adminId, propertyId, tenants } = req.body;
  const params = {
    TableName: 'LS_DB',
    Item: {
      Tenants: tenants,
      Property: propertyId,
      Admin: adminId,
    },
  };

  dd.put(params, (error, data) => {
    if (error) res.status(400).json({ error });
    else res.status(200).json({ status: 'Success..', data });
  });
};

//
const getTenant = (req, res) => {
  const { id } = req.params;
  const params = {
    TableName: 'Tenants',
    Key: {
      propertyId: id,
    },
  };
  dd.get(params, (err, data) => {
    if (err) res.status(404).json({ msg: 'Error', err });
    else res.status(200).json({ msg: 'Success', data });
  });
};

module.exports = { addTenant, getTenant, lsdb, getStripeCustomer };
