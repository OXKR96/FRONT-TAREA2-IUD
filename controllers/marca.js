const marca = require('../models/marca')
const Marca = require('../models/marca')
const { request, response} = require('express')

// crear
const createMarca= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const marcaDB = await Marca.findOne({nombre})//select * from marca where nombre=?
        
        if(marcaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const marca = new Marca(data)
        console.log(marca)
        await marca.save()
        return res.status(201).json(marca)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getMarcas = async (req = request, 
    res = response) => {
        try{
            const { marca } = req.query
            const marcasDB = await Marca.find({marca})//select * from marcas where marca=?
            return res.json(marcasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}
// findOne --> update
// findByIdAndUpdate
// actualizar por ID
const updateMarcapByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        /*const tipoequipoDB = await Marca.findById(id)
        if(!tipoequipoDB){
            return res.json({msg: 'No existe el tipo equipo'})
        }*/
        data.fechaActualizacion = new Date()
        console.log(data)
        const marcas = await Marca.findByIdAndUpdate(id, data, {new: true})
        return res.json(marcas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}


module.exports = {createMarca, getMarcas,updateMarcapByID}