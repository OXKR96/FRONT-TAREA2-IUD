const { Router } = require('express')
const {createEstado, getEstados,updateEstadopByID} =
 require('../controllers/estado')

const router = Router()

// crear
router.post('/', createEstado)

// consultar todos
router.get('/', getEstados)

// consultar todos
router.put('/:id', updateEstadopByID)

module.exports = router;