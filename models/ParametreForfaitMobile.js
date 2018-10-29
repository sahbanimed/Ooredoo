var db = require('../models/dbconnection');

var ParametreForfaitMobile = {

    addParametreForfaitMobile: function(id, ParametreForfaitMobile, callback) {
        db.query("insert into parametreforfaitmobile value (?,?,?,?,?,?,?)", [ParametreForfaitMobile.id, ParametreForfaitMobile.TypeForfait, ParametreForfaitMobile.Bonus, ParametreForfaitMobile.Gratuite, ParametreForfaitMobile.Familia, ParametreForfaitMobile.Coefficient, id], callback);
    },
    getParametreByIdVoix: function(id, callback) {
        return db.query("select * from parametreforfaitmobile where idVoix =" + [id], callback);
    },
    updateParametre: function(ParametreForfaitMobile, callback) {
        if (ParametreForfaitMobile.id == undefined) {
            console.log("1")
            db.query("insert into parametreforfaitmobile value (?,?,?,?,?,?,?)", [ParametreForfaitMobile.id, ParametreForfaitMobile.TypeForfait, ParametreForfaitMobile.Bonus, ParametreForfaitMobile.Gratuite, ParametreForfaitMobile.Familia, ParametreForfaitMobile.Coefficient, ParametreForfaitMobile.idVoix], callback);
        } else {
            console.log("2")
            db.query("update parametreforfaitmobile set TypeForfait=? ,Bonus=? ,Gratuite=? ,Familia=? ,Coefficient=? where id=?", [ParametreForfaitMobile.TypeForfait, ParametreForfaitMobile.Bonus, ParametreForfaitMobile.Gratuite, ParametreForfaitMobile.Familia, ParametreForfaitMobile.Coefficient, ParametreForfaitMobile.id], callback)
        }
    }
};
module.exports = ParametreForfaitMobile;