const data = require('./dataController');
module.exports = {

    getAllGoals: (req, res) => {
        const result = data.getArray('accomplishments');

        if (result === undefined) {
            res.status(400).send(`No Accomplishments`);
        } else {
            res.status(200).send(result);
        }
        }
    }