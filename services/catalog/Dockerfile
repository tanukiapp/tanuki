# Usa Node LTS
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install --production

# Copia el resto del código
COPY . .

# Compila TypeScript (si usas tsconfig)
RUN npm run build

# Expone el puerto del servicio
EXPOSE 3000

# Comando para correr el servicio
CMD ["node", "dist/main.js"]
