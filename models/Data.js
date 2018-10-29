var db = require('../models/dbconnection');

var Data = {

    addData: function(Data, callback) {
        db.query("insert into data value (?,?,?,?)", [Data.id, Data.TypeData, Data.NombreMaxLigneData, Data.CustCodeRacine], callback);
    },
    getDataByCustCode: function(CustCodeRacine, callback) {
        db.query("select * from data where CustCodeRacine =" + [CustCodeRacine], callback);
    },
    updateData: function(id, Data, callback) {
        if (Data.id == undefined) {
            db.query("insert into data value (?,?,?,?)", [Data.id, Data.TypeData, Data.NombreMaxLigneData, Data.CustCodeRacine], callback);
        } else {
            db.query("update data set TypeData=? ,NombreMaxLigneData=? where CustCodeRacine=? and id=?", [Data.TypeData, Data.NombreMaxLigneData, id, Data.id], callback)
        }
    }
};
module.exports = Data;