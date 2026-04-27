# Ejercicio 4 — React

Página construida con Vite + React + React Router que consume la API de [api-sports](https://api-sports.io) para mostrar información de los equipos de la NFL.

## Nivel objetivo: Senior

## Tecnologías

- React 19
- React Router DOM v6
- Vite 8
- api-sports (American Football API)
- Docker + Docker Compose

## Requisitos previos

- Node.js 20+
- Docker y Docker Compose (opcional)
- API key de [api-sports.io](https://api-sports.io)

## Variables de entorno

Crear un archivo `.env` dentro de `ejercicio-4-web/`:

```env
VITE_API_KEY=api_key_compartida_por_otro_medio
```

## Correr el proyecto

### Con Docker (recomendado)

Tener Docker Desktop si se está corriendo con Windows

```bash
docker compose up --build
```

Abrir [http://localhost:5174](http://localhost:5174)

### Sin Docker

```bash
cd ejercicio-4-web
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173)

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con botón de equipo aleatorio y favoritos |
| `/teams` | Listado de equipos con búsqueda |
| `/teams/:id` | Detalle de un equipo |
| `*` | Página 404 |

## Demo

Ver video en `/demo`