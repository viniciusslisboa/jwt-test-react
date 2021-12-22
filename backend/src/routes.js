const express = require('express');
const router = express.Router();
const AuthMiddleware = require('./middlewares/authToken');

const generateToken = require('./utils/GenerateToken');

router.post('/signup', (req, res) => {
    const user = req.body;
    user.password = undefined;
    const token = generateToken(user);
    return res.json({
        user,
        token
    })
})

router.post('/signin', (req, res) => {
    const credent = req.body;
    const token = generateToken(credent);

    return res.json({ token });
})


router.get('/users', AuthMiddleware, (req, res) => {
    return res.json([
        {
            id: 1,
            "name":"Vinícius",
            "email": "v@gmail.com",
            "admin": true
        },
        {
            id: 2,
            "name":"Thomaz",
            "email": "t@gmail.com",
            "admin": false
        },
        {
            id: 3,
            "name":"Kauã",
            "email": "k@gmail.com",
            "admin": false
        },
    ])
})


module.exports = router;