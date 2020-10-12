const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/users', userController.findAll);
router.get('/users/:id', userController.findOneById);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;