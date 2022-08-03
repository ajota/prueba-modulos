import { Modulo } from "./modulo.interface";


class ModuloBase implements Modulo{

    configDatos: any;

    constructor( modulo, datos){}
    
    config(modulo: any) {
        throw new Error("Method not implemented.");
    }

    recibir(datos: any) {
        throw new Error("Method not implemented.");
    }

    transmitir(datos: any) {
        throw new Error("Method not implemented.");
    }
    
    destruir(modulo: any) {
        throw new Error("Method not implemented.");
    }


}