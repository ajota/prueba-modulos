import { ModuloBase } from "../../core/modulos/moduloBase";

interface ConfiguracionEntrada{
    tipo: string;
    mensaje: string;
}

export class Configuracion extends ModuloBase<ConfiguracionEntrada>{
    mensajeEntrada: ConfiguracionEntrada; 

    recibirModulo(){
        this.mensajeEntrada =  this.recibir('Configuracion');
    }
    
}