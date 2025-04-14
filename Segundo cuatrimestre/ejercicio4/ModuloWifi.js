"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloWifi = void 0;
class ModuloWifi {
    constructor(pVelocidad, pFrecuencia) {
        this.velocidadMbps = pVelocidad;
        this.frecuenciaGHz = pFrecuencia;
    }
    getVelocidad() {
        return this.velocidadMbps;
    }
    setVelocidad(pVelocidad) {
        this.velocidadMbps = pVelocidad;
    }
    getFrecuencia() {
        return this.frecuenciaGHz;
    }
    setFrecuencia(pFrecuencia) {
        this.frecuenciaGHz = pFrecuencia;
    }
}
exports.ModuloWifi = ModuloWifi;
