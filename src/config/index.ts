import express,{Application} from "express";
import morgan from 'morgan';
import { Routes } from "../routes/index";

export class App{
    app: Application;
    public RoutePrv : Routes = new Routes();

    constructor(
        private port?: number|string 
    )
    {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }
    private settings (){
        this.app.set ('port', this.port || 3000)
    }
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port ', this.app.get('port'))
    }
    private middlewares (){
        this.app.use (morgan('dev'));
        this.app.use (express.json());
        this.app.use(express.urlencoded({extended: false}))
    }
    private routes(){
        this.RoutePrv.mantenimiento.routes(this.app);
        this.RoutePrv.equipo.routes(this.app);
    }
}