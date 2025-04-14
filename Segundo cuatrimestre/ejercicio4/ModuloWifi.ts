export class ModuloWifi {
    private velocidadMbps:number
    private frecuenciaGHz:number
    
    constructor (pVelocidad:number, pFrecuencia:number) {
        this.velocidadMbps= pVelocidad;
        this.frecuenciaGHz = pFrecuencia
    }

    public getVelocidad():number {
        return this.velocidadMbps
    }

    public setVelocidad(pVelocidad:number) {
        this.velocidadMbps = pVelocidad
    }

    public getFrecuencia():number {
        return this.frecuenciaGHz
    }

    public setFrecuencia(pFrecuencia:number) {
        this.frecuenciaGHz = pFrecuencia
    }













}