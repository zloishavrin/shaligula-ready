const Test = require('./models/Test');
const Quest = require('./models/Quest');

const init = async () => {

    const newTest = await Test.create({
        name: "Frontend Junior - JavaScript",
        img_path: "JS.png"
    });

    await Quest.create({
        test: newTest._id,
        text: "Какая функция позволяет проверить, является ли переменная объектом?",
        variable: [
            "isObject()",
            "hasOwnProperty",
            "instanceof",
            "JSON.stringify()"
        ],
        true: 2
    });

    await Quest.create({
        test: newTest._id,
        text: "Какой метод в JavaScript используется для удаления элемента по индексу из массива?",
        variable: [
            "deleteElement()",
            "removeElement()",
            "splice()",
            "pop()"
        ],
        true: 2
    });

}

module.exports = init;