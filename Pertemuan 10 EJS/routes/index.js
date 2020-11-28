const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    // check user session
    if (!req.session.user) {
        req.session.url = '/';
        res.redirect('auth/login');
    }
    else {
        res.render('pages/index');
    }
});

module.exports = router;