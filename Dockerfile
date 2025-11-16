# Базовый образ Node.js
FROM node:20-alpine AS base

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей
COPY package*.json ./

# Установка зависимостей
RUN npm ci

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN npm run build

# Production образ
FROM node:20-alpine AS production

WORKDIR /app

# Копирование package.json и установка только production зависимостей
COPY package*.json ./
RUN npm ci --only=production

# Копирование собранного приложения из базового образа
COPY --from=base /app/dist ./dist

# Открытие порта
EXPOSE 3000

# Запуск приложения
CMD ["node", "dist/main"]

