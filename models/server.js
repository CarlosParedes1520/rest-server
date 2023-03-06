import express from 'express'
import cors from "cors";
import {router} from '../routes/usuarios.js';


class Server {


    constructor() {
       this.app = express();
       this.port = process.env.PORT;
       this.usuariosRoutePath = '/api/usuarios';
       


       // Middlewares
        this.middleWares();

       
        // Rutas de mi aplicacion

       this.routes();
    }

    middleWares() {

        // cors
        this.app.use(cors())

        // parseo y lectura del body
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('public'))
    }


    routes(){
        
        this.app.use(this.usuariosRoutePath, router)
    }


    listen(){
        this.app.listen(this.port)
    }
}


export { Server};