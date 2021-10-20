import { Request,Response, Application } from "express";
import { EquipoController } from "../controllers/equipo.controllers";

export class EquipoRoutes{
    public equipocontrollers: EquipoController = new EquipoController();
    
    public routes (app: Application): void{
    app.route('/equipo').get(this.equipocontrollers.getEquipo);
     }
}