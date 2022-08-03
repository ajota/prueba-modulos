import { BaseComponentes, ComponentesAnidados } from "../ui/contenido.interface";

class Subcomponente<D> implements BaseComponentes<ComponentesAnidados, D> {
    tipo: ComponentesAnidados;
    contenido: D;
    
    constructor( tipo: ComponentesAnidados, datos: D ){
        this.tipo = tipo;
        this.contenido =  datos;
    }
}