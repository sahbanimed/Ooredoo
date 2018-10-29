var express = require("express");
var router = express.Router();
var Convention = require('../models/Convention');
var Voix = require('../models/Voix');
var Data = require('../models/Data');
var ParametreVoix = require('../models/ParametreForfaitMobile');

router.post('/', function(req, res) {
    Convention.addConvention(req.body.convention, function(err, count) {
        if (err) {
            res.send(err)
        }
        Voix.addVoix(req.body.voix, function(err, count) {
            if (err) {
                res.send(err)
            }
            console.log("haha " + count.insertId);
            for (i = 0; i < req.body.forfaitVoixLength; i++) {
                ParametreVoix.addParametreForfaitMobile(count.insertId, req.body.voix.forfaits[i], function(err, count) {
                    if (err) {
                        res.send(err)
                    }
                })
            }

        })
        for (i = 0; i < req.body.dataLength; i++)
            Data.addData(req.body.convention.datas[i], function(err, count) {
                if (err) {
                    res.send(err)
                }
            })
        res.send({ message: "Convention added" })
    })
})

router.get('/', function(req, res) {
    Convention.getAllConvention(function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    })
})

router.get('/:CustCodeRacine', function(req, res) {
    var t = req.params.CustCodeRacine;
    Convention.getConventionByCustCodeRacine(t, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    })
})

router.get('/voix/:CustCodeRacine', function(req, res) {
    var t = req.params.CustCodeRacine;
    Voix.getVoixByCustCodeRacine(t, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    })
})

router.get('/data/:CustCodeRacine', function(req, res) {
    var t = req.params.CustCodeRacine;
    Data.getDataByCustCode(t, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    })
})

router.get('/parametreForfaitVoix/:id', function(req, res) {
    var t = req.params.id;
    ParametreVoix.getParametreByIdVoix(t, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    })
})

router.get('/ByName/:Name', function(req, res) {
    var t = req.params.Name;
    Convention.getConventionByName(t, function(error, result) {
        if (error) {
            res.send(error);
        }
        if (!result) {
            res.status(404).send();
        } else {
            res.json(result);
        }
    })
})

router.put('/:id', function(req, res) {
    var id = req.params.id;
    Convention.updateConvention(id, req.body.convention, function(err, count) {
        if (err) {
            res.send(err)
        }
    })
    Voix.updateVoix(id, req.body.voix, function(err, count) {
        if (err) {
            res.send(err)
        }
    })
    for (i = 0; i < req.body.forfaitVoixLength; i++) {
        ParametreVoix.updateParametre(req.body.voix.forfaits[i], function(err, count) {
            if (err) {
                res.send(err)
            }
        })
    }
    for (i = 0; i < req.body.dataLength; i++) {
        Data.updateData(id, req.body.convention.datas[i], function(err, count) {
            if (err) {
                res.send(err)
            }
        })
    }

    //res.json({ message: "Convention modified" })

})

module.exports = router;