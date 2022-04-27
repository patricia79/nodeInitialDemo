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




