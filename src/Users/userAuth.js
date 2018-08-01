const dd = require('../Config/AwsConfig');
const hashingId = require('../Common/HashingId');

const signup = (req, res) => {
    console.log(req.body);
    const { AdminName, AdminEmail, AdminPW } = req.body;
    const params = {
    TableName: 'Admins',
    Item: {
        AdminName,
        AdminEmail,
        AdminPW,
        adminId: hashingId,
    },
    };

    dd.put(params, (err, data) => {
    if (err) {
        console.log(err);
        res.status(200).json({ status: 'error', error: err });
    } else {
        console.log(data);
        res.status(200).json({ status: 'success', data });
    }
    });
}

const signin = (req, res) => {
    console.log('body on test => ', req.body);
    res.status(200).json({status: 'it works test for sign in'});
}

const list = (req, res) => {
    const params = {
        TableName: 'Admins'
    };

    dd.scan(params, (err, d) => {
    if (err) {
        res.status(200).json({ status: 'error', error: err });
    }
    res.status(200).json({ status: 'success', data: d });
    });
    // res.status(200).json({ status: 'userRouter connected properly' });
};

const listTenants = (req, res) => {
    const params = {
        TableName: 'Tenants',

    };

    dd.scan(params, (err, d) => {
        if (err) {
            res.status(200).json({ status: 'error', error: err });
        }
        res.status(200).json({ status: 'success', data: d });
    });
}

const tenantSignup = (req, res) => {
    console.log(req.body);
    const { Name, Email, Phone, Password } = req.body;
    const params = {
        TableName: 'Tenants',
        Item: {
        Name,
        Email,
        Phone,
        Password,
        tenantId: hashingId,
        },
    };

    dd.put(params, (err, d) => {
        if (err) {
        console.log(err);
        res.status(200).json({ status: 'error', error: err });
        } else {
        console.log(d);
        res.status(200).json({ status: 'success', data: d });
        }
    });
}






module.exports = {
    signup,
    signin,
    list,
    listTenants,
    tenantSignup
}