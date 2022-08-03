export interface Modulo{
    configDatos;

    config ( modulo );
    recibir ( datos );
    transmitir ( datos );
    destruir ( modulo );
}