/**
 * La definicion de esta estructura tiene como objetivo etablecer de una forma estandar el manejo y la implementacion de los componentes visuales que hacen parte como piezas de la aplicacion, las siguientes criterios se tuvieron en cuenta:
 * Se establece una serie de componentes base de dos tipos contenedores(envolturas/componentes) y contenidos(anidados/subcompoonentes).
 * Los componentes Contenedores solo podran tener componentes anidados y nada mas.
 * Los componentes Anidados solo podran tener datos, atributos y valores.
 * Los componentes solo podran ser del tipo definido en el directorio que corresponde a cada tipo.
 */

// Directorio
/**
 * Define el directorio con los nombre de los componentes que definen la esyturctura y que contendran subcomponentes.
 */
enum contenedores { // Componentes
    banner = "Banner",
    contendor = "Contendor",
    navBar = "NavBar",
    topBar = "TopBar"
}

/**
 * Define el directorio con los nombre de los subcomponentes que tendran el contenido a presentar.
 */
enum anidados { // Subcomponentes
    seccion = "Seccion",
    imagen = "Imagen",
    texto = "Texto",
    paginador = "Paginador",
    cabecera = "Cabecera",
    acceso = "Acceso"
}

//----------------Estructura

type Contenedores = contenedores; // Componentes
type Anidados = anidados; // Subcomponentes
type Datos = {  [key:string]: string | number | boolean };

interface BaseComponentes<T, D> {
    tipo:T;
    contenido: D | Array<BaseComponentes<Anidados, D>>;
}

//---------------Modelo Base de componentes
class Componente<D> implements BaseComponentes<Contenedores, D> {
    tipo: Contenedores;
    contenido: Array<BaseComponentes<Anidados, D>>;
    
    constructor( tipo: Contenedores, subcomponentes: Array<BaseComponentes<Anidados, D>> ){
        this.tipo = tipo;
        this.contenido = subcomponentes;
    }
}

class Subcomponente<D> implements BaseComponentes<Anidados, D> {
    tipo: Anidados;
    contenido: D;
    
    constructor( tipo: Anidados, datos: D ){
        this.tipo = tipo;
        this.contenido =  datos;
    }
}

//--------------USO
class VistaOnBoarding {
   contenedorAccesos = new Componente(
    contenedores.contendor,
    [
        new Subcomponente(
            anidados.imagen,
            OnBoardindModel
        )
    ]
   );
}


class OnBoardindModel {
    data = "hola";
    data1 = "hola";
    data2 = "hola";
    data3 = "hola";
}