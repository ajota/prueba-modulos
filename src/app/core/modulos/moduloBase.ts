import {  Mediador } from "./mediador";

export class ModuloBase<T>{

    private mediador = new Mediador<T>();


    recibir(nombreModulo) {
        let mensaje;
        for (let item in this.mediador.datos ) {
            mensaje = item[nombreModulo];
            if( mensaje ) break;
        }
        return mensaje;
    }

    enviar(nombreModulo: string, datos: T) {
        this.mediador.comunicar(nombreModulo, datos);
        return datos;
    }

}