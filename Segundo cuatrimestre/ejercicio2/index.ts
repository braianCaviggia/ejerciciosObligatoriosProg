import { Celular } from "./celular";

let celular1 = new Celular ("IPHONE", 12, "IOS", undefined, undefined, undefined)
let celular2 = new Celular ("IPHONE", 13, "IOS", "32GB","128GB", undefined)
let celular3 = new Celular ("IPHONE", 14, "IOS", "64GB", "264GB", true)

celular1.mostrarInfo()
celular1.encenderApagar()

celular2.mostrarInfo()
celular2.encenderApagar()

celular3.mostrarInfo()
celular3.encenderApagar()

