const Test = require('./models/Test');
const Quest = require('./models/Quest');

const init = async () => {

    const newTest = await Test.create({
        name: "Frontend - ReactJS",
        img_path: "react.svg"
    })

    await Quest.create({
        test: newTest._id,
        text: "Что из перечисленного используется для создания компонента в ReactJS?",
        variable: [
            "createClass",
            "createElement",
            "createComponent",
            "ComponentNew"
        ],
        true: 0
    })

}

module.exports = init;