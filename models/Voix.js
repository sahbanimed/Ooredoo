var db = require('../models/dbconnection');

var Voix = {

    addVoix: function(Voix, callback) {
        db.query("insert into voix value (?,?,?,?,?,?)", [Voix.id, Voix.NombreMaxLigneVoix, Voix.DureeEngagementLigne, Voix.TypeOffre, Voix.EtatVenteVoix, Voix.CustCodeRacine], callback);
    },
    lastId: function(callback) {
        return db.query("select max(id) from voix", callback);
    },
    getVoixByCustCodeRacine: function(CustCodeRacine, callback) {
        return db.query("select * from voix where CustCodeRacine =" + [CustCodeRacine], callback);
    },
    updateVoix: function(id, Voix, callback) {
        db.query("update voix set NombreMaxLigneVoix= ? ,DureeEngagementLigne= ? ,TypeOffre= ? ,EtatVenteVoix= ? where CustCodeRacine= ?", [Voix.NombreMaxLigneVoix, Voix.DureeEngagementLigne, Voix.TypeOffre, Voix.EtatVenteVoix, id], callback)
    }
};
module.exports = Voix;