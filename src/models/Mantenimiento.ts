import  sequelize,{Model,DataTypes, DateDataType} from "sequelize";

import { database } from "../database/db";

export class Mantenimiento extends Model {
    public fecha! : DataTypes.DateOnlyDataType ;
    public descripcion! : string;
    public resultado!: string;
}
 export interface MantenimientoI {
    fecha: DateDataType;
    descripcion:String;
    resultado: String;
    
}

Mantenimiento.init(
    {
        fecha :{
             type:DataTypes.DATE,
             allowNull: false
        },
        descripcion: {
             type:DataTypes.STRING,
             allowNull: false
         },

         resultado :{
             type: DataTypes.STRING,
             allowNull: false
         }

    },
    {
    tableName :"mantenimiento",
    sequelize: database,
    timestamps: true
    }
);
