const router = require('express').Router();
const userController = require('../controller/userController');
const imovelController = require('../controller/imovelController');
const commentController = require('../controller/commentController');
const interestedController = require('../controller/interestedController');
const psychographicController = require('../controller/psychographicController');
const ratingController = require('../controller/ratingController');
const faculdadeController = require('../controller/faculdadeController');
const rulesController = require('../controller/rulesController');
const attributesController = require('../controller/attributesController');

router.get('/users', userController.findAll);
// router.get('/user', userController.findOneById);
router.get('/user/:id', userController.findOneById);
router.get('/user/', userController.findOneById);
router.get('/email', userController.findByEmail);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.put('/usersp/:id', userController.updatePassword);
router.delete('/users/:id', userController.delete);
router.post('/auth', userController.auth);
router.post('/avatar', userController.updateAvatar);
router.post('/deleteAvatar', userController.deleteAvatar);

router.post('/role', userController.updateRole);

router.get('/interested', interestedController.findInterested);
router.post('/interesse', interestedController.store);
router.post('/removeInteresse', interestedController.remove);

router.get('/caracteristicas', psychographicController.findAll);
router.post('/caracteristicas', psychographicController.store);

router.get('/rules', rulesController.findAll);

router.get('/attributes', attributesController.findAll);

router.get('/findUsers', psychographicController.findUsers);

router.post('/avaliar', ratingController.update);
router.post('/avaliacao', ratingController.store);

router.post('/avaliable', imovelController.updateAvaliable);

router.get('/imoveis', imovelController.findAll);
router.get('/meusImoveis', imovelController.findAllByUserId);
router.post('/imoveis', imovelController.store);
router.get('/imovel', imovelController.findOneById);
router.post('/deleteImovel', imovelController.delete);
router.get('/search', imovelController.findPesquisa);

router.post('/endereco', imovelController.storeEndereco);

router.post('/comment', commentController.store);

router.get('/facul', faculdadeController.findOneById);
router.post('/facul', faculdadeController.store);

module.exports = router;