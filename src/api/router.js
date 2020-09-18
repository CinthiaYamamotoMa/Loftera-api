const userController = require('../controller/userController');

module.exports = (app) => {
    app.use('/users', userController);
}