# arquitectura:
el conjunto de decisiones tomadas durante la construccion de un sistema
a su vez, tambien refleja las consecuencias de dichas decisiones.

ejemplos:

## arq. cliente servidor
se divide en dos aplicaciones:

aplicacion cliente:
relacionarse con el usuario, y enviar pedidos (y recibir sus respuestas) al servidor

aplicacion servidor:
relacionar con la persistencia, y va a recibir (y contestar) los pedidos los clientes

## arq en capas
### modelo tradicional
Presentacion: esta en contacto con el usuario, y delega las operaciones a la capa de negocios
Negocio: resuelve operaciones, y se comunica con la capa de persistencia para guardar y recuperar cosas.
Persistencia: guarda y recupera cosas, solo a pedido de la capa de negocios.

### modelo combinado con arq cli/serv

Presentacion: esta en contacto con el usuario, y delega las operaciones al servidor
Ruteo: recibe los pedidos del cliente, y los delega a la capa de negocios
Negocio: resuelve operaciones, y se comunica con la capa de persistencia para guardar y recuperar cosas.
Persistencia: guarda y recupera cosas, solo a pedido de la capa de negocios.

cada capa responde a quien le hizo el pedido, sin saltearse otras capas.

nuestra tarea de hoy (alcance):

Presentacion: PNT2
Ruteo: nos queda construir esta capa nomas.
Negocio: ya esta hecho (tp1)
Persistencia: ya esta hecho (tp2)

## dependencias

dominio : no debe depender de nadie
aplicacion : puede depender solo de los elementos del dominio
infraestructura: puede depender de cualquier cosa.

cuando hablamos de depender, en codigo se traduce en: "import"

si vemos que A importa B, decimos que A depende de B, pq sin B no compila/no funciona.
por ende, decimos que B es una dependencia de A. 

# API rest
## endpoints / puntos de acceso
los nombres mediante los cuales hacemos referencia a las acciones que puede llevar 
a cabo mi servidor

asi como la interfaz de una clase se define por sus metodos,
la interfaz (API) de un servidor se define por sus puntos de acceso.

estos puntos de acceso en el contexto web son URLs.

## URLs
dominio
ruta
parametros

protocolo://dominio/ruta?parametros

ejemplo:

http://drive.google.com/documentos?fechaModificacion=hoy&theme=dark

http://    +     drive.google.com   +    /documentos   +  ?   fechaModificacion=hoy   &   theme=dark

## Peticiones HTTP (Request)

### estructura:
metodo ruta protocolo
host: dominio
[cabeceras/headers]
[linea vacia]
[cuerpo/body] 

### ejemplo
GET /documentos http/1.1
host: drive.google.com
User-Agent: chrome

fechaModificacion=hoy&theme=dark

## IP de mi maquina
host (servidor)
127.0.0.1 <-> localhost