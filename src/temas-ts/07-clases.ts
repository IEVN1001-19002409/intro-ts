
class Persona2{
    static imprimir() {
        throw new Error("Method not implemented.");
    }
    nombre:string;
    edad:number;

    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }
    
    imprimir(){
        console.log(`Nombre: ${this.nombre} Edad:${this.edad}`);
    }
}

let persona2:Persona2;
persona2=new Persona2('Mario',24)
console.log(persona2)
