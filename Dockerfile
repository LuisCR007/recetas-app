# Usa Node.js 18 LTS (imagen ligera alpine)
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm ci --only=production

# Copia todo el código
COPY . .

# Crea la carpeta de la base de datos
RUN mkdir -p database

# Expone el puerto
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Comando para iniciar la aplicación
CMD ["npm", "start"]
