const router = require('express').Router();
const userService = require('../services/userService');
const responseObj = require('../config/response')

// all routes bellow have the prefix /user - keep that in mind when adding/editin routes.

router.get('/', async (req, res) => {

    const users = await userService.findAll();
    const response = responseObj.success;
    response.data = users;
    res.json(response);
    
});

module.exports = router;