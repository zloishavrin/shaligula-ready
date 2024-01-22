const Router = require('express');
const controller = require('../controllers/infoController');
const { check } = require('express-validator');

const router = new Router();

router.get('/all-test', controller.getAllTests);

router.get('/current-test', [
    check('id', 'Поле ID не может быть пустым.').notEmpty()
], controller.getCurrentTest);

router.get('/search-test', [
    check('search', 'Строка поиска не может быть пустой.').notEmpty()
], controller.searchTest);

router.get('/check-result', [
    check('question', 'Массив вопрос не может быть пустым').notEmpty()
], controller.checkResult);

module.exports = router;