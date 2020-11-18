require('dotenv').config();

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const routes = require('./src/api/router.js');
var bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT ? process.env.PORT : 3000, () => {
    console.log(`server started on port: ${process.env.PORT ? process.env.PORT : 3000}`);
});