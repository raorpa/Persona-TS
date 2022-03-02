interface Mamifero{
	velocidad: number;
  caminar(metros): void;
}

class Persona implements Mamifero{
    public nombre: string;
    public edad: number;
   	public velocidad: number;
    constructor(nombre: string, edad: number, velocidad: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.velocidad = velocidad;
    }
    public  saludar(): void {
        console.log("Hola, mi nombre es "+this.nombre+"y tengo "+this.edad+" años.");
    }
    public caminar(metros): void{
    	console.log(""+(metros/this.velocidad));
    }
}

class Perro implements Mamifero{
		public raza: string;
    public color: string;
    public velocidad: number;
    constructor(raza: string, color: string, velocidad: number){
    	this.raza = raza;
      this.color = color;
      this.velocidad = velocidad;
    }
    
    public ladrar(){
    	console.log("guau");
    }
    public caminar(metros): void{
    	console.log("El perro "+ perro1.raza + " tarda " + (metros / this.velocidad) + " segundos en recorrer 100 metros");
    }
}

let perro1 = new Perro("husky", "negro", 5);
let perro2 = new Perro("Bichón", "Blanco", 4);

let segundos = perro1.caminar(100);


