const router = require('express').Router();
const userService = require('../services/userService');
const responseObj = require('../config/response');
const { user } = require('../models/');
const { auth } = require('../services/userService');

// all routes bellow have the prefix /user - keep that in mind when adding/editin routes.
module.exports = {

    async findAll(req, res) {
        const users = await userService.findAll();
        const response = responseObj.success;
        response.data = users;
        res.json(response);
    },
    async findOneById(req, res) {
        const userId = req.params.id;
        if (userId) {
            const userFound = await userService.findOneById(userId);
            const response = responseObj.success;
            if (!user) {
                response.data = null;
                response.message = `user with id ${userId} was not found`;
            } else {
                response.data = userFound;
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    },
    async findByEmail(req, res) {
        const email = req.query.email;
        if (email) {
            const userFound = await userService.findByEmail(email);
            const response = responseObj.success;
            if (!user) {
                response.data = null;
                response.message = `user with e-mail ${email} was not found`;
            } else {
                response.data = userFound;
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    },
    async store(req, res) {
        const receivedUser = req.body;
        if (receivedUser) {
            const createdUser = await userService.storeUser(receivedUser);
            const response = responseObj.success;
            response.data = createdUser;
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "user object was not found on request body";
            res.status(400).json(response);
        }
    },
    async update(req, res){
        const receivedUser = req.body;
        const userId = req.params.id;

        if (receivedUser && userId) {
            const updatedUser = await userService.updateUser(receivedUser, userId);
            const response = responseObj.success;
            response.data = updatedUser;
            res.json(response);
        } else {
            const response = responseObj.fail;
            let message = "";
            if (!receivedUser) {
                message = " user object was not found on request body; ";
            }
            if (!userId) {
                message += " userId object was not found on request params; ";
            }
            res.status(400).json(response);
        }
    },
    async delete(req, res) {
        const userId = req.params.id;
        if (userId) {
            const deleteResponse = await userService.delete(userId);
            const response = responseObj.success;
            if (!deleteResponse) {
                response.data = null;
                response.message = `user with id ${userId} was not found`;
            } else {
                response.data = deleteResponse;
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    },

    async auth(req, res) {
        console.log("vai ");
        var { email, password } = req.body;

        await user.findOne({
            where: {
                email: email
            }
        }).then((foundUser) => {

            if(foundUser) {
                if(password == foundUser.dataValues.password) {

                    res.status(200);
                    return res.send({ user: foundUser });
                }
            }
            res.status(401);
            return res.send({});
        })

    },

    async findInterested(req, res) {
        const userId = req.query.userId;
        if (userId) {
            const userFound = await userService.findInterested(userId);
            const response = responseObj.success;
            if (!user) {
                response.data = null;
                response.message = `user with id ${userId} was not found`;
            } else {
                response.data = userFound;
            }
            res.json(response);
        } else {
            const response = responseObj.fail;
            response.message = "field <id> was not found on the request";
            res.status(400).json(response);
        }
    },
}