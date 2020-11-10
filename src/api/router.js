const router = require('express').Router();
const userController = require('../controller/userController');
const imovelController = require('../controller/imovelController');

router.get('/users', userController.findAll);
router.get('/user', userController.findOneById);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);
router.post('/auth', userController.auth);

router.get('/imovel', imovelController.findOneById);
router.get('/imoveis', imovelController.findAll);

module.exports = router;