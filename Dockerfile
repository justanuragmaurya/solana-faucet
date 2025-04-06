FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

EXPOSE 5011

CMD ["pnpm","dev"]