#!/bin/bash

function log()
{
    echo -e "[run.sh] $1"
}

log "Inicializando backend..."

if [ "$NODE_ENV" = "production" ]; then
    npm run build

    log "Rodando em PRODUÇÃO"

    # Em ambiente real deveria usar PM2 ou equivalente
    # para gerenciar o processo e erros em execução.
    node ./server.js
else
    log "rodando em DESENVOLVIMENTO"
    npm run start
fi