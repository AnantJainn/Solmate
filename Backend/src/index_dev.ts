// import { createConnection } from "typeorm";
// import express from "express";
// import * as bodyParser from "body-parser";
// import cors from 'cors';

// import * as dotenv from 'dotenv';
// dotenv.config({
//     path: './.env.dev'
// });

// import logger from "./utils/logger";
// import { PORT_NUMBER } from "./config";
// const  { router } = require("./services");

// // create express app
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// app.set('/', router);

// app.listen(PORT_NUMBER);

// console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);


import { createConnection } from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config({
    path: './.env.dev'
});

import logger from "./utils/logger";
import { PORT_NUMBER } from "./config";
const  { router } = require("./services"); // Import router directly

// create express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', router); // Use app.use() to set up the router middleware

app.listen(PORT_NUMBER, () => {
    console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);
});




// import { createConnection } from "typeorm";
// import express from "express";
// import * as bodyParser from "body-parser";
// import cors from 'cors';

// import * as dotenv from 'dotenv';
// dotenv.config({
//     path: './.env.dev'
// });

// import logger from "./utils/logger";
// import { PORT_NUMBER } from "./config";
// const  { router } = require("./services");

// // create express app
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Mount the router at the root level
// app.use('/', router);

// app.listen(PORT_NUMBER, () => {
//     console.log(`Solmate Presale API has started on ${PORT_NUMBER} port.`);
// });
