export class Alumno {
   private nombre: string;
   private apellido: string;
   private nota:number

   constructor (pNombre:string, pApellido:string, pNota:number) {
      this.nombre = pNombre
      this.apellido = pApellido
      this.nota = pNota
   }

   public getNombre():string {
      return this.nombre
   }

   public getApellido():string {
      return this.apellido
   }
   public getNota():void {
      let nuevaNota = this.nota
      if (nuevaNota >= 7 && nuevaNota <= 10) {
         this.nota = nuevaNota;
         console.log(`aprobaste con ${nuevaNota} puntos, felicidades`)
     } else if (nuevaNota >= 0 && nuevaNota <= 7) {
         console.log(`desaprobaste con una nota de ${nuevaNota}`);
     } else if (nuevaNota <0 && nuevaNota > 10){
        console.log(`Nota no Valida`);
  }
   }

   public setNombre(pNombre: string) {
      this.nombre = pNombre;
  }

  public setApellido(pApellido: string) {
   this.apellido = pApellido;
}

public setNota(nuevaNota: number) {
   this.nota = nuevaNota
  }
}