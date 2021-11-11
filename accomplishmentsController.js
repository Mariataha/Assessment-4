const data = require('./dataController');
module.exports = {

    getAllAccomplishments: (req, res) => {
        const result = data.getFullArray('accomplishments');

        if (result === undefined) {
            res.status(400).send(`No Accomplishments`);
        } else {
            res.status(200).send(result);
        }
        }
    }