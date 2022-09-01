// const sumaEdades = sumarEdadesDePersonas(p, p)
// console.log(sumaEdades)

// function saludar() {
//     console.log('hola!')
// }

// const saludar = 8

// const resultado = saludar()

// console.log(resultado)

// function ejecutarYmostrarTresVeces(unaFuncion) {
//     // este parametro
//     unaFuncion()
//     unaFuncion()
//     unaFuncion()
// }

// ejecutarYmostrarTresVeces(saludar)

// // ejecutarYmostrarTresVeces('hola')

// function generarUnaFuncionQueSalude() {

//     function despedirse() {
//         console.log('chau chau')
//     }

//     return despedirse

// }

// const variable = generarUnaFuncionQueSalude()
// variable()

// function sucesor(numero) {
//     return numero + 1
// }


// // (/* params */) => (/* result */)

// // (numero) => (numero + 1)
// // numero => numero + 1

// function ejecutarConArgumentoYMostrar(fn, arg) {
//     const result = fn(arg)
//     console.log(result)
// }

// // ejecutarConArgumentoYMostrar(sucesor, 15)

// ejecutarConArgumentoYMostrar(numero => numero + 1, 15)

const numeros = [10, 20, 30, 1, 2, 3, 4, 5, 6]
// const numeros = [4, 4, 4, 4, 4, 4, 5]

// existe un 4 en numeros? (si / no)

// let encontre = false
// let i = 0
// while (i < numeros.length && !encontre) {
//     if (numeros[i] == 4)
//         encontre = true
//     else
//         i++
// }

// console.log(encontre)

// function esUnCuatro(numero) {
//     return numero === 4
// }

// const result = numeros.some(esUnCuatro)

// const result = numeros.every(esUnCuatro)


// const result = numeros.some(n => n === 4)

// const result = numeros.findIndex(n => n === 4)

// const nombres = ['marian', 'carolina', 'tomas', 'alejandro']
// const result = nombres.find(n => n.startsWith('c'))

const personas = [
    {
        nombre: 'marian',
        curso: 'C'
    },
    {
        nombre: 'carolina',
        curso: 'C'
    },
    {
        nombre: 'tomas',
        curso: 'C'
    },
    {
        nombre: 'alejandro',
        curso: 'X'
    }
]
// const result = personas.find(p => p.nombre === 'tomas')
// const result = personas.find(p => p.curso === 'C')

// const result = personas.filter(p => p.curso === 'C')

// [10, 20, 30, 1, 2, 3, 4, 5, 6]

// const result = numeros.map(n => n * 2)

const result = personas.map(p => {
    const cursoModificado = {
        nombre: p.nombre,
        curso: p.curso
    }
    if (p.curso === 'C') {
        cursoModificado.turno = 'mañana'
    } else {
        cursoModificado.turno = 'tarde'
    }
    return cursoModificado
})

// const result = personas.map(p => ({ ...p, turno: p.curso == 'C' ? 'maniana' : 'tarde' }))

console.log(result)