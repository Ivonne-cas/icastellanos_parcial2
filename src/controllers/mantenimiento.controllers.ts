import { Request,Response } from "express";

import { Mantenimiento,MantenimientoI } from "../models/Mantenimiento";

export class MantenimientoController{
    public async getMantenimiento( req:Request , res: Response){
        try {
            const mantenimiento = await Mantenimiento.findAll()
            if (!mantenimiento){
                res.status(400).json({ msg: 'mantenimiento inavalido'})
            }
            return res.status (200).json ({mantenimiento})
        } catch (error) {
            res. status(500).json ({ msg: 'error interno'})
        }
    }
}