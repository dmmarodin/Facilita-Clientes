#!/bin/bash

function log()
{
    echo -e "[run.sh] $1"
}

log "Inicializando backend..."

npm install

if [ "$NODE_ENV" = "production" ]; then
    npm run build

    log "Rodando em PRODUÇÃO"

    # Em ambiente real deveria usar PM2 ou equivalente
    # para gerenciar o processo e erros em execução.
    node ./dist/index.js
else
    log "rodando em DESENVOLVIMENTO"
    npm run dev
fi
