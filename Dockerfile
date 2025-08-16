#Устанавливаем зависимости
FROM node:20.11-alpine
WORKDIR /app
RUN npm install -g pnpm

#Билдим приложение
#Кэширование зависимостей — если файлы в проекте изменились,
#но package.json остался неизменным, то стейдж с установкой зависимостей повторно не выполняется, что экономит время.
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

#Стейдж запуска
ENV NODE_ENV=production

EXPOSE 3000

CMD ["pnpm", "start"]