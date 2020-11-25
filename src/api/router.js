const router = require('express').Router();
const userController = require('../controller/userController');
const imovelController = require('../controller/imovelController');
const commentController = require('../controller/commentController');

router.get('/users', userController.findAll);
router.get('/user', userController.findOneById);
router.get('/email', userController.findByEmail);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);
router.post('/auth', userController.auth);

router.get('/interested', userController.findInterested);
router.post('/interesse', imovelController.storeInterested);

router.get('/imoveis', imovelController.findAll);
router.get('/imovel', imovelController.findOneById);

router.post('/comment', commentController.store);

module.exports = router;