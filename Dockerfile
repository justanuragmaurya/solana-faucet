FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 5011

CMD ["pnpm","dev"]