"use strict";

const multer = require('multer')
const path = require('path')

let fileFilter = (req, file, cb) => {
    const fileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

    if (fileTypes.some(fileType => fileType === file.mimetype)) return cb(null, true);

    return cb(new Error('Vàlids arxius exclusivament amb les següents extensions .jpeg/.jpg, .png and .gif'), false);
}

module.exports = fileFilter;