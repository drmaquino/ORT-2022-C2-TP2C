
se me pierde la gente, sus datos,
me cuesta sacar estadisticas y 
ver a que publico me conviene apuntar.

cliente

entradas

comsumisiones

amigues

clientes que asisten a un evento

quiero saber
de donde son
que edad tienen
como se enteraron

// Entidad ====================================

una cosa que puede ser identificada, es decir, tiene un identificador univoco => ID

comparando el ID puedo saber si dos entidades son la misma

ej:

dni 36123123
edad en años 33
barrio villa del parque
origen redes sociales

dni 35123123
edad en años 33
barrio villa del parque
origen conocido

dos distintas porque su identificador es distinto

//===================================================================

tipado debil vs fuerte

tipado fuerte:
no permite la coercion de tipos en sus datos
no permite el casteo implicito

(("yo tengo " + 36 ) + " años")

+(+("yo tengo ", 36), " años")

concatenacion:
+(string, string): string

//===================================================================

truthy values y falsey values
valores verdadereables y falseables

valores falseables: 0 y ""
valores verdadereables: numeros distintos a 0 y strings no vacios


//====================================
Objetos de valor (Value Objects ó VO)

son objetos que no tienen un identificador

para saber si dos VO son el mismo debo compararlos campo a campo

ej:

Fecha {
    dia
    mes
    anio
}

f1 = Fecha { id: 1, 17, 8, 2022 }
f2 = Fecha { id: 2, 17, 8, 2022 }

ej2:

Color { r,g,b }

//======================================================

class X {}
const x = new X()

POJO
Plain Old Java(script) Object

const o = {
    nombre: 'marian'
}

DTO : Data Transfer Object (Objeto para Transferencia de Datos)

diccionario -> {
    clave: valor,
    clave: valor,
    .....
}
