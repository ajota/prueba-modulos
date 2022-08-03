/**
 * Lista con los nombre de los componentes que definen la esturctura y contendran subcomponentes (componentes anidados).
 * Alias: componentes
 */
 export enum componentesContenedores { // Componentes
    banner = "Banner",
    contendor = "Contendor",
    navBar = "NavBar",
    topBar = "TopBar"
}

/**
 * Lista con los nombres de los subcomponentes (componentes anidados) que representan el contenido a presentar.
 * Alias: Subcomponentes
 */
 export enum componentesAnidados { // Subcomponentes
    seccion = "Seccion",
    imagen = "Imagen",
    texto = "Texto",
    paginador = "Paginador",
    cabecera = "Cabecera",
    acceso = "Acceso"
}