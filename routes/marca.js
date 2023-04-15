const { Router } = require('express')
const {createMarca, getMarcas,updateMarcapByID} =
 require('../controllers/marca')

const router = Router()

// crear
router.post('/', createMarca)

// consultar todos
router.get('/', getMarcas)

// consultar todos
router.put('/:id', updateMarcapByID)

module.exports = router;