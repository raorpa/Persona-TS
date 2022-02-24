// @ts-check

let  notSure: any = 4;
notSure = "Nueva cadena de texto"; // Ahora pasará a ser un string
notSure = false; // Por último es de un tipo boolean
let  lista: any[] = [1, true, "Cadena"];
lista[1] = 100;


function construirNombre(nombre: string, apellido?: string): string{
    if (apellido) return nombre + apellido
    else return nombre
}

class  Persona {
    public  nombre: string;
    public  edad: number;
    public profesion: string;
    constructor(nombre: string, edad: number, profesion?: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    public  saludar(): void {
        console.log("Hola, mi nombre es "+this.nombre+"y tengo "+this.edad+" años.");
    }
}


let  persona = new  Persona("Jonatan", 32);
persona.saludar();
// Hola, mi nombre es Jonatan y tengo 32 años.

let nombre: string = construirNombre(persona.nombre);
console.log(nombre);

function imprimir(p1: Persona, p2: Persona): void {
	if(p1.edad > p2.edad){
  	console.log(p1.nombre + " es mayor y es " + p1.profesion)
  }
 	else{
  	console.log(p2.nombre + " es mayor y es " + p2.profesion)
  }
}

let persona1: Persona = new Persona("Ramón", 28);

enum profesiones{
	Pintor="Pintor",
  Programador="Programador",
  Panadero = "Panadero",
};

let persona2: Persona = new Persona("Juan", 38, profesiones.Panadero);

imprimir(persona2, persona1);