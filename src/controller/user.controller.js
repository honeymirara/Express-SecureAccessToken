const express = require('express');
const { createUser, authUser } = require('../service/user.service');
const { isValidUserBody, isValidUser } = require('../helper/validation');
const { createToken } = require('../helper/jwt');
const { buildResponse } = require('../helper/buildResponse')
const route = express.Router();


route.post('/reg', isValidUserBody, isValidUser, async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});


route.post('/auth', isValidUser, async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const data = await authUser(email, pwd);
        const token = createToken(data);
        res.setHeader('token', [token]);
        buildResponse(res, 200, data);
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
});

module.exports = route;