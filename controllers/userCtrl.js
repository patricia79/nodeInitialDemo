
"use strict";

const config = require("../config");

const userGet = (req, res) => {
  try {

    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.status(200).json({
      name: "Patricia",
      edat: "25",
     fullUrl,
    });
  } catch (error) {
    res.status(500).json({ message: `Error` });
  }
};

module.exports =  userGet;
