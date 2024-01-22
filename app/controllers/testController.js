const Article = require('../models/Article');
const Category = require('../models/Category');
const Recommend = require('../models/Recommend');

class infoController {

    async getAllCategory(req, res) {
        try {
            const categorys = await Category.find();

            const categorysFull = [];
            for(let index = 0; index < categorys.length; index++) {
                const category = categorys[index].toObject();
                const articles = await Article.find({category: category.title});
                category["length"] = articles.length;
                categorysFull.push(category);
            } 

            res.json(categorysFull);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка поиска всех категорий.'});
        }
    }

    async getCategory(req, res) {
        try {
            const path = req.query.path;
            const category = await Category.findOne({path: path});
            const articles = await Article.find({category: category.title});
            const categoryObject = category.toObject();
            categoryObject['articles'] = articles;
            res.json(categoryObject);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка поиска категории.'});
        }
    }

    async getArticle(req, res) {
        try {
            const path = req.query.path;
            const article = await Article.findOne({path: path});
            res.json(article);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка поиска статьи.'});
        }
    }

    async getAllArticles(req, res) {
        try {
            const articles = await Article.find();
            const articlesFull = [];
            for(let index = 0; index < articles.length; index++) {
                const articleObject = articles[index].toObject();
                const category = await Category.findOne({title: articleObject.category});
                articleObject["category"] = category;
                articlesFull.push(articleObject);
            }
            res.json(articlesFull);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка получения всех статей.'});
        }
    }

    async getArticleBySearch(req, res) {
        try {
            const search = req.query.search;
            const articles = await Article.find({
                $or: [
                    { title: { "$regex": search, "$options": "i" } },
                    { text: { "$regex": search, "$options": "i" } }
                ]
            });
            const articlesFull = [];
            for(let index = 0; index < articles.length; index++) {
                const articleObject = articles[index].toObject();
                const category = await Category.findOne({title: articleObject.category});
                articleObject["category"] = category;
                articlesFull.push(articleObject);
            }
            res.json(articlesFull);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка поиска статьи по запросу.'});
        }
    }

    async getCategoryBySearch(req, res) {
        try {
            const search = req.query.search;
            const categories = await Category.find({
                    $or: [
                        { title: { "$regex": search, "$options": "i" } },
                        { description: { "$regex": search, "$options": "i" } }
                    ]
            }, );
            res.json(categories);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка поиска статьи по запросу.'});
        }
    }

    async getArticleBySearchAndCategory(req, res) {
        try {
            const search = req.query.search;
            const category = req.query.category;
            const articles = await Article.find({
                $and: [
                    { 
                      $or: [
                        { title: { "$regex": search, "$options": "i" } },
                        { text: { "$regex": search, "$options": "i" } }
                      ]
                    },
                    { 
                      category: category
                    }
                ]
            }, );
            res.json(articles);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка поиска статьи.'});
        }
    }

    async getRecommend(req, res) {
        try {
            const recommends = await Recommend.find();
            const articles = [];
            for(let index = 0; index < recommends.length; index++) {
                const newArticle = await Article.findById(recommends[index].article);
                articles.push(newArticle);
            }
            const articlesFull = [];
            for(let index = 0; index < articles.length; index++) {
                const articleObject = articles[index].toObject();
                const category = await Category.findOne({title: articleObject.category});
                articleObject["category"] = category;
                articlesFull.push(articleObject);
            }
            res.json(articlesFull);
        }
        catch(error) {
            console.log(error);
            res.status(400).json({message: 'Ошибка получения рекомендаций.'});
        }
    }

}

module.exports = new infoController();