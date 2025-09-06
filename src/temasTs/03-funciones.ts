function sumar(a: number, b: number): number {
    return a + b
}
const resultado = sumar(4, 3);
console.log('Califiacion es: ' + resultado)

function multiplicar(n1:number,otronumero?:number,base:number=6):number{
    return n1*base;
}
console.log('El resultado es '+multiplicar(3));
console.log('El resultado es '+multiplicar(3,5));
console.log('El resultado es '+multiplicar(3,3,4));

//Funciones flecha
const addNumberArrow=(a:number,b:number):string=>{return`${a+b}`}
