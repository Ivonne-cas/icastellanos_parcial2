import { MantenimientoRoutes } from "./mantenimiento.routes";
import {EquipoRoutes } from "./equipo.routes";
export class Routes {
    public mantenimiento : MantenimientoRoutes = new MantenimientoRoutes();
    public equipo: EquipoRoutes = new EquipoRoutes();
    
}