From node:20
WORKDIR /app
EXPOSE 4000
COPY package*.json /app/
RUN npm install
COPY . .
RUN npx prisma generate
CMD ["npm", "run", "dev"]

