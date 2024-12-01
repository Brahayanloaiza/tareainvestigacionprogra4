-creamos la carpeta del proyecto en el escritorio o el directorio donde creamos conveniente 
-abrimos las opciones de la carpeta, ingresamos a la opcion que dice abrir con----> y luego en la opcion de VsCode
-nos abrira el VsCode
-abrimos una terminal en la parte superior de la pantalla donde dice "terminal" y escribimos en siguiente script o comando "npm create-app "nombre de la app""
luego de ello esperamos que nos digan ""HAPPY HACKING" y escribimos "npm install" para inicializar dependencias, luego de esto escribimos "node index.js" para inicializar el servidor.

# The Nanny API

Este proyecto consiste en un **API REST básico** sobre los personajes de la serie *The Nanny*, desarrollado con **Node.js** y **Express**, junto con un frontend en **React** que consume los datos del API.

## Tabla de contenido
1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Características](#características)
3. [Tecnologías utilizadas](#tecnologías-utilizadas)
4. [Instrucciones para ejecutar el proyecto](#instrucciones-para-ejecutar-el-proyecto)
   - [Backend (API)](#backend-api)
   - [Frontend](#frontend)
5. [Estructura de los endpoints](#estructura-de-los-endpoints)
6. [Referencias](#referencias)

---

## Descripción del proyecto

El objetivo del proyecto es demostrar cómo construir una API REST con Node.js y Express y conectarla a una aplicación React para mostrar información sobre los personajes de la serie *The Nanny*. 

El API contiene información básica de cada personaje, como su nombre, ocupación y una breve descripción. El frontend permite visualizar la lista de personajes y acceder a detalles específicos de cada uno.

---

## Características

- API RESTful para manejar datos de personajes.
- Frontend en React que consume los datos del API.
- Estructura modular para facilitar la ampliación.
- Uso de herramientas modernas como Axios para la comunicación entre frontend y backend.

---

## Tecnologías utilizadas

- **Backend:**
  - Node.js
  - Express

- **Frontend:**
  - React
  - Axios

- **Dependencias adicionales:**
  - Nodemon (para desarrollo)
  - Cors (para permitir comunicación entre frontend y backend)

---

## Instrucciones para ejecutar el proyecto

### Backend (API)

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Brahayanloaiza/tareainvestigacionprogra4

   Instala las dependencias:
utilizamos el script o comando "npm install" dentro de una terminal


Inicia el servidor:
Para iniciar el servidor ponemso el siguiente comando "node index.js"

O usa Nodemon para desarrollo:
ingresamos el comando o script "npx nodemon index.js"


Estructura de los endpoints
1. Inicio
URL: /
Método: GET
Descripción: Devuelve un mensaje de bienvenida.
Ejemplo de respuesta:
{
  "message": "Bienvenido al API de The Nanny"
}



2. Lista de personajes
URL: /characters
Método: GET
Descripción: Devuelve una lista de personajes.
Ejemplo de respuesta:
[
  {
    "id": 1,
    "name": "Fran Fine",
    "occupation": "Niñera",
    "description": "Una niñera con un estilo único y divertido."
  },
  {
    "id": 2,
    "name": "Maxwell Sheffield",
    "occupation": "Productor teatral",
    "description": "El jefe de Fran."
  }
]




3. Detalle de un personaje
URL: /characters/:id
Método: GET
Descripción: Devuelve información específica de un personaje basado en su id.
Ejemplo de respuesta:
{
  "id": 1,
  "name": "Fran Fine",
  "occupation": "Niñera",
  "description": "Una niñera con un estilo único y divertido."
}



4. Crear un personaje
URL: /characters
Método: POST
Descripción: Permite agregar un nuevo personaje.
Cuerpo del ejemplo:
{
  "name": "Niles",
  "occupation": "Mayordomo",
  "description": "El sarcástico mayordomo de la familia Sheffield."
}



Referencias
Documentación oficial de Node.js: https://nodejs.org
Express.js: https://expressjs.com/
React: https://reactjs.org/
Axios: https://axios-http.com/


















Referencias  

Express.js: https://expressjs.com/
React: https://reactjs.org/
Axios: https://axios-http.com/
