const { Router } = require('express')
const { createInventario, getInventarios,updateInventarioByID} =
 require('../controllers/inventario')

const router = Router()

// crear
router.post('/', createInventario)

// consultar todos
router.get('/', getInventarios)

// consultar todos
router.put('/:id', updateInventarioByID)



module.exports = router;