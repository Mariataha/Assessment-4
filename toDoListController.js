const data = require('./dataController');
module.exports = {

    getFullToDoList: (req, res) => {
        const result = data.getFullArray('toDoList');

        if (result === undefined) {
            res.status(400).send(`No To Do List`);
        } else {
            res.status(200).send(result);
        }
        }
    }