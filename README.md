# Backend de Aplicación de Mensajería en Tiempo Real

Este es el backend de la aplicación de mensajería en tiempo real, desarrollado usando Node.js, Express, MongoDB y Socket.IO.

## Requisitos
- Node.js versión 18 o superior
- MongoDB (base de datos)

## Instalación
- Clona el repositorio:
https://github.com/Armando-Amezquita/kuepa-back.git

- Navega al directorio del proyecto
- Instala las dependencias:
npm install

## Características
- Autenticación de usuarios
- Creación de usuarios
- Manejo de tokens de acceso
- Conexión en tiempo real a través de Socket.IO
- Almacenamiento de datos en MongoDB
- Manejo de errores y excepciones
- Configuración de CORS para permitir acceso desde el frontend
## Tecnologías utilizadas
- Node.js
- Express
- MongoDB (base de datos)
- Socket.IO
- Helmet (para mejorar la seguridad)
- Morgan (para registrar solicitudes)
- Autenticación y manejo de tokens (JWT)

## Ejecución
Para ejecutar el servidor backend, asegúrate de tener una instancia de MongoDB en ejecución y luego utiliza el siguiente comando:
- npm start
El servidor se ejecutará en http://localhost:3000.
