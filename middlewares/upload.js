"use strict";

const multer = require("multer");
const path = require("path");

let fileFilter = (req, res, cb) => {
  if (req.files) {
    const fileTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];

    if (fileTypes.some((fileType) => fileType === req.files.image.mimetype))
      return cb(null, true);

    return res
      .status(400)
      .json({
        message:
          "Valid files only with the following extensions .jpeg/.jpg, .png and .gif",
      });
  } else {
    res.status(400).json({ message: "No hi ha cap arxiu" }); //
  }
};

module.exports = fileFilter;
