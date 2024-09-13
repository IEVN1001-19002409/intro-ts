interface Alumno{
    matricula?:number;
    nombre:string;
    email:string;
    edad:number;
    genero:string;
    calificacion:number;
}

const alumno:Alumno={
    nombre: "juan",
    email: "juan@gmail.com",
    edad: 23,
    genero: "M",
    calificacion: 9,
}


console.log(alumno.nombre)
console.log(alumno.edad)

let mascotas=["Perro","Gato","Perico"]

mascotas[1]="perico verde";

mascotas.push("Gato dos");
console.table(mascotas);

let tem: (string | number)[] = [];
tem.push("RCR");
tem.push(34);