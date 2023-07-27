# Dockerfile

# Primera etapa de construcción para obtener dependencias
FROM node:14.21 AS builder

WORKDIR /app

COPY package*.json ./




# Aquí puedes instalar otras dependencias
RUN  npm install  @radix-ui/react-navigation-menu@^0.1.2 \
    @radix-ui/react-progress@^0.1.4 \
    @radix-ui/react-radio-group@^0.1.5 \
    @radix-ui/react-slider@^0.1.4
#instalar dependencias faltantes
RUN npm install 
# Copiamos el archivo .env al contenedor
COPY .env ./

# Segunda etapa de construcción para generar el código y utilizar las variables de entorno
FROM builder AS production

# Definimos las variables de entorno para que estén disponibles durante la construcción
ARG API


# Creamos una copia de las variables de entorno del Dockerfile
ENV API=$API


# Copiamos el código fuente y generamos la aplicación

COPY . .

CMD ["npm", "run", "dev"]
