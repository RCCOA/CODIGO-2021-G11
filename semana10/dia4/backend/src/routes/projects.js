const {Router} = require('express');
const router = Router();

const { getAll,create,update,delProyect } = require( '../controllers/project.controller');

router.get('/',getAll);
router.post('/',create);
router.put('/:id',update);
router.delete('/:id',delProyect);

module.exports = router;