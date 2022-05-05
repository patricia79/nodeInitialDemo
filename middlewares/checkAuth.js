"use strict";

// Configuración de middleware para Autorización para la ruta del punto final: '/ time'

let checkAuth = (req, res, next) => {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic') === -1 ) {
      return res.status(401).json({message: "Unauthorized HTTP Request"})
    }
    const base64Credentials = req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if (username == 'Freia' && password == 'Apple') {
      next()      
    } else {
      return res.status(401).json({message: "Unauthorized HTTP Request"})
    }}
         
    module.exports = checkAuth