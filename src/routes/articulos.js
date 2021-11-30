const { Router } = require('express');
const { getArticulos, createArticulo, getArticulo, deleteArticulo, updateArticulo } = require('../controllers/articulos.controller');
const router = Router();

router.route('/')
.get(getArticulos)
.post(createArticulo);

router.route('/:id')
.get(getArticulo)
.delete(deleteArticulo)
.put(updateArticulo)

//router.route('/:precio')
//.get(getArticulop)

module.exports = router;