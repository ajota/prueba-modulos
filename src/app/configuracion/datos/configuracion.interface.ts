
export interface Marca {
    logo: string;
    estilo: Object;
    estructura: Object;
} 

export interface Configuracion{
    marca: Marca;
    aplicacion: Object;
    producto: string;
}