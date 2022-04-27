
"use strict";

const config = require("../config");

const userGet = (req, res) => {
  try {
    res.status(200).json({
      name: "Patricia",
      edat: "25",
      url: `http://localhost:${config.port}/user`,
    });
  } catch (error) {
    res.status(500).json({ message: `Error` });
  }
};

module.exports =  userGet;
