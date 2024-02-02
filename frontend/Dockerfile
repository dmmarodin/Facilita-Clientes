FROM node:20-buster

WORKDIR "/app"

# Ideal em produção
# COPY package.json .
# RUN npm install

COPY . .


ENTRYPOINT [ "/app/run.sh" ]