import  sequelize,{Model,DataTypes, DateDataType} from "sequelize";

import { database } from "../database/db";

export class Equipo extends Model {

    public marca! : string;
    public modelo!: string;
}
 export interface EquipoI {
    
    marca:String;
    modelo: String;
    
}

Equipo.init(
    {
        
        marca: {
             type:DataTypes.STRING,
             allowNull: false
         },

         modelo :{
             type: DataTypes.STRING,
             allowNull: false
         }

    },
    {
    tableName :"equipo",
    sequelize: database,
    timestamps: true
    }
);
