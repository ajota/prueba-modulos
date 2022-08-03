import { componentesAnidados, componentesContenedores } from "../ui/componentes.enum";

/**
 * Define el tipo con la lista de valores que acepta un elemento de tipo ComponentesContenedores.
 */
export type ComponentesContenedores = componentesContenedores; // Componentes
/**
 * Define el tipo con la lista de valores que acepta un elemento de tipo ComponentesAnidados.
 */
export type ComponentesAnidados = componentesAnidados; // Subcomponentes
/**
 * Define la estructura y el nivel de anidacion que se acepta en las propiedades con este tipo.
 */
export type Datos = {  [key:string]: string | number | boolean };

/**
 * Contrato de la estrutura que deberan seguir los elementos que seran considarados como componentes o subcomponentes. 
 */
export interface BaseComponentes<T, D> {
    tipo:T;
    contenido: D | Array<BaseComponentes<ComponentesAnidados, D>>;
}