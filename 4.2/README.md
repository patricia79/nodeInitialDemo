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