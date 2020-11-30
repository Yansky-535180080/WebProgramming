const { response } = require('express');
const express = require('express');

const router = express.Router();

router.get('/login', async (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    }
    else {
        res.render('pages/login', { layout: false});
    }
});

router.get('/logout', async (req, res) => {
    // destroy all sessions
    req.session.destroy();

    //redirect to login
    res.redirect('/');
});

router.post('/login', async (req, res) => {
    // get user input
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "admin") {
        // TODO: implement sessions to check user is logged-in
        req.session.user = "admin";

        // redirect to member area
        res.redirect(req.session.url);
    }
    else {
        // TODO: render the login page with error information
        res.render('pages/login', {layout: false, error: 'Wrong username or password.'});
    }
})

module.exports = router;