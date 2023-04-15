const Estado = require('../models/estado')
const { request, response} = require('express')

// crear
const createEstado= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const estadoDB = await Estado.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(estadoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const estado = new Estado(data)
        console.log(estado)
        await estado.save()
        return res.status(201).json(estado)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getEstados = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const estadosDB = await Estado.find({estado})//select * from estados where estado=?
            return res.json(estadosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}
// findOne --> update
// findByIdAndUpdate
// actualizar por ID
const updateEstadopByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const tipoequipoDB = await TipoEquipo.findById(id)
        if(!tipoequipoDB){
            return res.json({msg: 'No existe el tipo equipo'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const estados = await Estado.findByIdAndUpdate(id, data, {new: true})
        return res.json(estados)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}


module.exports = {createEstado, getEstados,updateEstadopByID}