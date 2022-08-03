import { BaseComponentes, ComponentesAnidados, ComponentesContenedores } from "./contenido.interface";

class Componente<D> implements BaseComponentes<ComponentesContenedores, D> {
    tipo: ComponentesContenedores;
    contenido: Array<BaseComponentes<ComponentesAnidados, D>>;
    
    constructor( tipo: ComponentesContenedores, subcomponentes: Array<BaseComponentes<ComponentesAnidados, D>> ){
        this.tipo = tipo;
        this.contenido = subcomponentes;
    }
}