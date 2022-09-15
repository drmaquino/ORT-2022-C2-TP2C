Realizar un pequeño sistema que permita registrar y consultar donaciones hechas a nuestra empresa. Debe poder satisfacer los siguientes casos de uso:

- Carga de una donación, la cual incluye: monto de la donación (siempre mayor a cero), y opcional, nombre completo del donante. En caso de no proveer ese último dato, se registra como “anónima”. En caso de recibir una donación no anónima con un monto estrictamente superior a los $10.000, esta donación se deberá informar al administrador del servicio, enviando un mail a: cursonodeav@gmail.com .

- Listado de donaciones, que recibe un monto a consultar, y devuelve un colección con todas las donaciones no anónimas que superen el monto solicitado.

===================================================================

# identifico las entidades que participan del negocio

donacion:
    nombreDonante: nombre completo | "anonimo" (string)
    monto: numero positivo (number)

# acciones que se llevan a cabo en el negocio

cargar una donacion:
    - crear donacion (validar datos)
    - registrarla (almacenarla)
    - si monto > 10.000 & no anonima => notifico  al admin
  
listar donaciones segun su monto y procedencia:
    - filtar por montos mayores al recibido y donantes no anonimos

## aclaraciones
asumo que los nombres solo tienen caracteres alfabeticos