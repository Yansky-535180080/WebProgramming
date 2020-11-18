const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    if (!req.session.user) {
        req.session.destination = '/todo';
        res.redirect('auth/login');
    }
    else {
        res.render('pages/todo', { tasks: req.session.tasks });
    }
});

router.post('/add', async (req, res) => {
    // if there's no task in the session, create one
    if (!req.session.tasks) {
        req.session.tasks = [];
    }
    const newTask = req.body.taskName;
    req.session.tasks.push(newTask);

    res.redirect('/todo');
});

router.post('/done/:index', async (req, res) => {
    // get the index of to be deleted task
    const index = req.params.index;

    // only delete if there's that task
    if (req.session.tasks && index < req.session.tasks.length) {
        req.session.tasks.splice(index, 1);
    }

    res.redirect('/todo');
});

module.exports = router;