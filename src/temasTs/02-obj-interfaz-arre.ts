interface Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    nota?: number;
}

const alumno: Alumno = {
    nombre: "Pedro",
    apellido: "Paramo",
    edad: 20,
    email: "pp@gmail.com",
}

console.table(alumno)

let mascotas=['perro','gato','perico']
mascotas[1]='nuevo gato'
mascotas.push('leon');

console.table(mascotas)

let tem:(number|string)[]=[]

tem.push(11)
tem.push('once')

console.table(tem)