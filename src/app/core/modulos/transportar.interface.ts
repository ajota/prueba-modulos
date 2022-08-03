export interface ITransportar<M, D>{
    datos: D;

    observar ( modulo: M ): void;
    mantener ( modulo: M, datos: D ): D;
    enviar ( modulo: M, datos: D ): D;
    limpiar( modulo: M ): boolean;
}