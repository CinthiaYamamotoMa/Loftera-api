require('dotenv').config();

const express = require('express');
const app = express();

require('./api/router.js')(app);

app.use(express.json());

app.listen(process.env.PORT ? process.env.PORT : 3000, () => {
    console.log(`server started on port: ${process.env.PORT ? process.env.PORT : 3000}`);
});