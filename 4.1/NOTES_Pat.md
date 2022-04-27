Cómo subir archivos en Node.js y Express

Esto es lo que hace cada uno de estos paquetes:

- express- Marco web popular construido sobre Node.js. Lo usaremos para desarrollar la API REST.

- body-parser- Middleware de análisis del cuerpo de la solicitud de Node.js que analiza el cuerpo de la solicitud entrante antes que los controladores y lo pone a disposición en la req.bodypropiedad. En resumen, simplifica la solicitud entrante.

- cors- Otro middleware Express para habilitar solicitudes CORS (Cross-Origin Resource Sharing).

- express-fileupload- Middleware Simple Express para cargar archivos. Analiza multipart/form-datalas solicitudes, extrae los archivos si están disponibles y los pone a disposición bajo req.filespropiedad.

- morgan- Middleware Node.js para registrar solicitudes HTTP.

- lodash- Una biblioteca de JavaScript que proporciona funciones de utilidad para matrices, números, objetos, cadenas, etc.

1.Crear servidor Express
Después de instalar las dependencias requeridas, comencemos creo mi servidor Express.


# Ignora la carpeta node_modules
node_modules/

# Ignora todos los archivos de texto
*.txt

# Ignora los archivos relacionados a API keys y db
.env
.env_test

# en rutas, va esto:

const { Router } = require('express');
const { usuarioGet } = require('../controllers/usuario');

const router = Router();

router.get('/', usuarioGet);

module.exports = router;

# ejemplos de codigo:

// Aquí no tenim cap endpoint
app.get('/', (req, res) => {
    res.send('Home page')
  })
  
  //Aquí queda clar que es un endpoint
  app.get('/endpoint', (req, res) => {
    res.send('Això és un endpoint')
  })

  // Errors
  app.get('*', (req, res) => {
    res.send('404 Page not found')
  })

  app.listen(config.port, () => {
    console.log(`API REST en http://localhost:${config.port}/`);
  });

# 🧑🏻‍💻 Estructura del servidor

## CONTROLLERS
En esta carpeta se ubucan los controladores (Es el segundo o tercer argumento, dependiendo de si hay middlewares o no de las rutas). Estas funciones se exportan a la carpeta rutas.

## DB
Aquí van todas las configuraciones de las bases de datos, la iniciación de la base de datos se exportará al archivo servidor en la carpeta models.

## MIDDLEWARES
Aquí van los middlewares, estas funciones se exportan a la carpeta de routes y se pasan como segundo argumento de las rutas (Si no hay middlewares, el segundo argumento de las rutas es lo que pases de los controladores).

## MODELS
Aquí van los modelos de las bases de datos, servidor y todo a lo que queramos hacer una especie de plantilla. En este caso he puesto un ejemplo de servidor basado en clases, ya que aunque al principio pueda parecer complicado, es mucho mejor y más facil a la hora de escalar un proyecto.

## ROUTES
En esta carpeta van las rutas. Las exportaciones de los archivos de estas rutas se hacen al archivo server.js que se encuentra en models.

## VARIABLES DE ENTORNO
Las variables de entorno se tienen que añadir al archivo .gitignore, su nombre es .env y para usarlas tienes que instalar la dependencia dotenv. En este caso no lo he puesto en el .gitignore para que veas como es, pero en teoría ahí va el puerto que vamos a usar, contraseñas de las bases de datos... Para que la persona que se descarga el archivo sepa que tiene que añadir al .env es recomendable crear otro archivo que se llame .config.env con los datos que hay que poner en el .env y este si que lo subimos a github.
