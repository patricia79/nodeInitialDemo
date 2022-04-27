"use strict";

// Configuración de middleware para Autorización para la ruta del punto final: '/ time'

let checkAuth = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).send("Unauthorized HTTP Request");
    }
    next();
    }
    
    module.exports = checkAuth