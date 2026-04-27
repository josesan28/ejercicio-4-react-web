FROM node:20-alpine
WORKDIR /app
COPY ejercicio-4-web/package*.json ./
RUN npm install
COPY ejercicio-4-web/ .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]