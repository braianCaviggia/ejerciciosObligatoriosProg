import { ComputadoraBuilder } from "./ComputadoraBuilder";
import { Computadora } from "./Computadora";

let computadora1 = new ComputadoraBuilder() 

.agregarProcesador("Intel I7")
.agregarRam(8)
.agregarAlmacenamiento("500GB")
.agregarTarjetaGrafica("NVIDIA GTX 1050")
.agregarSistemaOperativo("Windows 11")

.armarPc()

computadora1.mostrar()

let computadora2 = new ComputadoraBuilder()

.agregarProcesador("Intel I5")
.agregarRam(4)
.agregarAlmacenamiento("1TB")
.agregarTarjetaGrafica("AMD RADEON VEGA 8")
.agregarSistemaOperativo("Windows 10")

.armarPc()

computadora2.mostrar()