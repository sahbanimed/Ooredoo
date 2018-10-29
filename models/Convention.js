var db = require('../models/dbconnection');

var Convention = {

    getConventionByCustCodeRacine: function(CustCodeRacine, callback) {
        return db.query("select * from convention where CustCodeRacine =" + [CustCodeRacine], callback);
    },

    getAllConvention: function(callback) {
        return db.query("select * from convention", callback);
    },

    getConventionByName: function(Name, callback) {
        return db.query("select * from convention where Name ='" + [Name] + "'", callback);
    },

    addConvention: function(Convention, callback) {
        db.query("insert into convention value (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [Convention.CustCodeRacine, Convention.ConventionPro,
            Convention.Name, Convention.Etat, Convention.DateDebutPublishing, Convention.DateFinPublishing, Convention.DateDebutConvention, Convention.DateFinConvention,
            Convention.TypeAction, Convention.Duree, Convention.RespPaiemetUnique, Convention.OffreBase, Convention.DureeAccord, Convention.VPN,
            Convention.ProrateGratuit, Convention.AgeRetraite, Convention.BonCommande, Convention.BonHandsetPlafonne, Convention.BoutiqueVente
        ], callback);
    },

    updateConvention: function(id, Convention, callback) {
        db.query("update convention set ConventionPro= ? ,Name= ? ,Etat= ? ,DateDebutPublishing= ?, DateFinPublishing= ? ,DateDebutConvention= ? ,DateFinConvention= ? ,TypeAction= ?, Duree= ?,RespPaiemetUnique= ?,OffreBase= ?,DureeAccord= ?,VPN=?,ProrateGratuit=?, AgeRetraite=?, BonCommande=?, BonHandsetPlafonne=?, BoutiqueVente=? where CustCodeRacine= ?", [Convention.ConventionPro,
            Convention.Name, Convention.Etat, Convention.DateDebutPublishing, Convention.DateFinPublishing, Convention.DateDebutConvention, Convention.DateFinConvention,
            Convention.TypeAction, Convention.Duree, Convention.RespPaiemetUnique, Convention.OffreBase, Convention.DureeAccord, Convention.VPN,
            Convention.ProrateGratuit, Convention.AgeRetraite, Convention.BonCommande, Convention.BonHandsetPlafonne, Convention.BoutiqueVente, id
        ], callback)
    }
};
module.exports = Convention;