const Sequelize = require ('sequelize');

const DB_NAME = 'icastellanos_parcial';

const DB_USER = 'root';

const DB_PASS = 'Almacen08#';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host:'localhost',
        dialect: 'mysql',
        port :3306
    }
);

database.sync({force: true})
    .then( function(){
        console.log ('base de datooos creada correctamente');

    })