const Test = require('../models/Test');
const Quest = require('../models/Quest');
const mongoose = require('mongoose');

class testController {

    async getAllTests(req, res) {
        try {
            const tests = await Test.find();
            res.json(tests);
        }
        catch(error) {
            console.error(error);
            res.status(400).json({message: 'Ошибка получения тестов.'});
        }
    }

    async getCurrentTest(req, res) {
        try {
            const id = req.query.id;

            const quest = await Quest.aggregate([
                { $match: { test: new mongoose.Types.ObjectId(id) } },
                { $sample: { size: 20 } }
            ]).exec();

            res.json(quest);
        }
        catch(error) {
            console.error(error);
            res.status(400).json({message: 'Ошибка получения теста.'});
        }
    }

    async searchTest(req, res) {
        try {
            const search = req.query.search;

            const tests = await Test.find({ name: {"$regex": search, "$options": "i"} });

            res.json(tests);
        }
        catch(error) {
            console.error(error);
            res.status(400).json({message: 'Ошибка поиска тестов.'});
        }
    }

}

module.exports = new testController();