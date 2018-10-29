var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "ooredooDB"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "Create table if not exists convention  (CustCodeRacine integer, ConventionPro VARCHAR(255),Name VARCHAR(255),Etat VARCHAR(255),DateDebutPublishing Date,DateFinPublishing Date,DateDebutConvention Date, DateFinConvention Date, TypeAction  VARCHAR(255),Duree integer,RespPaiemetUnique  VARCHAR(255),OffreBase  VARCHAR(255),DureeAccord  integer,VPN  VARCHAR(255),ProrateGratuit VARCHAR(255),AgeRetraite integer, BonCommande  VARCHAR(255),BonHandsetPlafonne VARCHAR(255), BoutiqueVente  VARCHAR(255),PRIMARY KEY(CustCodeRacine))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table convention created!");
    });
    var sql2 = "Create table if not exists voix (id integer NOT NULL AUTO_INCREMENT, NombreMaxLigneVoix integer, DureeEngagementLigne integer, TypeOffre VARCHAR(255), EtatVenteVoix Varchar(255),PRIMARY KEY(id),CustCodeRacine integer,FOREIGN KEY(CustCodeRacine) REFERENCES convention(CustCodeRacine))";
    con.query(sql2, function(err, result) {
        if (err) throw err;
        console.log("Table voix created!");
    });
    var sql3 = "Create table if not exists data (id integer NOT NULL AUTO_INCREMENT, TypeData Varchar(255), NombreMaxLigneData integer,PRIMARY KEY(id),CustCodeRacine integer,FOREIGN KEY(CustCodeRacine) REFERENCES convention(CustCodeRacine))";
    con.query(sql3, function(err, result) {
        if (err) throw err;
        console.log("Table Data created!");
    });
    var sql4 = "Create table if not exists parametreforfaitmobile (id integer NOT NULL AUTO_INCREMENT, TypeForfait Varchar(255), Bonus Varchar(255), Gratuite Varchar(255), Familia Varchar(255), Coefficient integer,PRIMARY KEY(id), idVoix integer,FOREIGN KEY(idVoix) REFERENCES voix(id))";
    con.query(sql4, function(err, result) {
        if (err) throw err;
        console.log("Table parametreforfaitmobile created!");
    });
});

module.exports = con;