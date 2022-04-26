"use strict";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

//const fileUpload = require('express-fileupload');
//const _ = require('lodash');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());