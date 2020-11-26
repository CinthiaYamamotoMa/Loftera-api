const router = require('express').Router();
const userController = require('../controller/userController');
const imovelController = require('../controller/imovelController');
const commentController = require('../controller/commentController');
const interestedController = require('../controller/interestedController');

router.get('/users', userController.findAll);
// router.get('/user', userController.findOneById);
router.get('/user/:id', userController.findOneById);
router.get('/email', userController.findByEmail);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.put('/usersp/:id', userController.updatePassword);
router.delete('/users/:id', userController.delete);
router.post('/auth', userController.auth);

router.get('/interested', interestedController.findInterested);
router.post('/interesse', interestedController.store);

router.get('/imoveis', imovelController.findAll);
router.get('/imovel', imovelController.findOneById);

router.post('/comment', commentController.store);

module.exports = router;