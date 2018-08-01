# Lambda Labs: CS8-propertymgt

## [Heroku Deployment](https://lsmgt.herokuapp.com/)

# API Endpoints

## Admin Endpoints

| Method | Endpoint (/api/admin) | Description                                       |
| ------ | --------------------- | ------------------------------------------------- |
| GET    | /property/:id         | Returns a _Property_ object from the database     |
| GET    | /workorder            | Returns an list (array?) or workorders            |
| POST   | /tenant/add           | Creates a new _Tenant_ object, sent w/in req.body |
