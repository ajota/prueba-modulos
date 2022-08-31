export class Mediador<T> {
    datos:Object;

    constructor() {
        this.datos = {};
    }

    comunicar(moduloReceptor, datos): boolean{
     this.datos[moduloReceptor] = datos as T;
     return true;
    }
    // comunicar( moduloReceptor, datos ) { 
    //     moduloReceptor.recibir(datos);
    // }
}