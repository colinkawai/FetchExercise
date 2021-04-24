var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}))

router.post('/spend/:points', (req, res) => {
    let timesArray = [];
    let returnArray = [];
    let points = parseInt(req.params.points);
    let storage = req.app.locals.storage;
    let oldest = Object.keys(storage)[0];
    let totalPoints = req.app.locals.totalPoints;

    //sort the objects
    for (let k in storage) {
        timesArray.push(k);
    }
    timesArray.sort();

    let i = 0;
    while (points > 0 && i < timesArray.length) {
        oldest = timesArray[i];

        let obj = {};
        if (totalPoints[storage[oldest].payer] >= points) {
            totalPoints[storage[oldest].payer] -= points;
            obj = { "payer": storage[oldest].payer, "points": -points };
            points = 0;
        }
        else {
            obj = { "payer": storage[oldest].payer, "points": -totalPoints[storage[oldest].payer] };
            points -= totalPoints[storage[oldest].payer];
            totalPoints[storage[oldest].payer] = 0;
        }
        returnArray.push(obj);
        i++;

    }
    res.send(returnArray);
})
module.exports = router;