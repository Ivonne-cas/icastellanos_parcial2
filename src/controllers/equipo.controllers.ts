import { Request,Response } from "express";

import { Equipo,EquipoI } from "../models/Equipos";

export class EquipoController{
    public async getEquipo( req:Request , res: Response){
        try {
            const equipo = await Equipo.findAll()
            if (!equipo){
                res.status(400).json({ msg: 'equipo inavalido'})
            }
            return res.status (200).json ({equipo})
        } catch (error) {
            res. status(500).json ({ msg: 'error interno'})
        }
    }
}