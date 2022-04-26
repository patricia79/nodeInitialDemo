const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        this.usuarioPath = '/usuario'
        
        this.middlewares();
        
        this.routes();
        
        this.listen();
    };

    middlewares(){
        // Este middleware es para leer el body en el postman.
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Puerto iniciado en ${this.port}`)
        });
    }
};

module.exports = Server;