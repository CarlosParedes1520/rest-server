
import { response } from 'express';


const usuariosGet= (req, res = response)  =>{

    const {q, nombre} = req.query
    res.json({
        ok: true,
        msg: 'get API - congtrolador',
        q, 
        nombre
    })
}


const usuariosPost= (req, res = response)  =>{

    const {nombre, edad} = req.body;
    
    res.json({
        
        msg: 'post API - congtrolador',
        nombre,
         edad
    })
}


const usuariosPut= (req, res = response)  =>{


    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'Put API - congtrolador',
        id
    })
}


const usuariosDelete= (req, res = response)  =>{

    res.json({
        ok: true,
        msg: 'Delete API - congtrolador'
    })
}


const usuariosPatch= (req, res = response)  =>{

    res.json({
        ok: true,
        msg: 'Patch API - congtrolador'
    })
}

export { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch

};