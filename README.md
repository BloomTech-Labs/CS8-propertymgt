# Lambda Labs: CS8-propertymgt

## [Heroku Deployment](https://lsmgt.herokuapp.com/)

# API Endpoints

## Admin Endpoints

| Method | Endpoint (/api/admin) | Description                                       |
| ------ | --------------------- | ------------------------------------------------- |
| GET    | /property/:id         | Returns a _Property_ object from the database     |
| GET    | /workorder            | Returns a list (array?) of workorders             |
| POST   | /tenant/add           | Creates a new _Tenant_ object, sent w/in req.body |

## Tenant Endpoints

| Method | Endpoint (/api/tenant) | Description |
| ------ | ---------------------- | ----------- |


## User Endpoints (auth)

| Method | Endpoint (/api/users) | Description |
| ------ | --------------------- | ----------- |
| GET    | /signup               | --          |
| GET    | /signin               | --          |
| GET    | /admin/list           | --          |
| GET    | /tenant/list          | --          |
| GET    | /tenant/signup        | --          |

## Property Endpoints

| Method | Endpoint (/api/property) | Description |
| ------ | ------------------------ | ----------- |
| GET    | /all                     | --          |
| POST   | /add                     | --          |
| DELETE | /delete/:id              | --          |
| PATCH  | /update/:id              | --          |
| PATCH  | /settings/update/:id     | --          |

## Billing Endpoints

| Method | Endpoint (/billing) | Description |
| ------ | ------------------- | ----------- |


## Stack

| Tech             | Description              |
| ---------------- | ------------------------ |
| Heroku           | Hosts our website        |
| Node.js          | Used to write our apis   |
| React            | Library for building app |
| Redux            | State handling           |
| React-Router-Dom | Used to navigate app     |
| Semantic UI      | Styling                  |
| Stripe           | Handles payment method   |
| AWS - DynamoDB   | Database                 |
| AWS - Cognito    | Authentication           |
| AWS - S3         | Document database        |
