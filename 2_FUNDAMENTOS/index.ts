// 1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y:number = 15.584848

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2- String
const firstName: string = "Anderson"

console.log(firstName.toUpperCase())

let fullName: string 

const lastName: string = "Ferreira"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3- Boolean
let a: boolean = false
console.log(a)
console.log(typeof a)

a = true
console.log(a)
console.log(typeof a)

// 4 - inference annotation
const ann: string = "teste"

let inf = "teste"

console.log(ann, inf)

// ann = 1
// inf = 1

// "compilação automatica -> tsc -w"
console.log("testando 4")

// 5 - desafio 2
// meu codigo
let n: number = 15
let s: string = "15"

const numero = `A string maior é ${s}`;

console.log(numero)

// codigo do instrutor
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu vou imprimir o número ${numberToString}`

console.log(printMyNumber)