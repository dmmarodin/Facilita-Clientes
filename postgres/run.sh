#!/bin/bash
echo "Migrando banco"
set -euvx
createdb facilita_douglas
psql -v ON_ERROR_STOP=1 -1 -f /data.sql facilita_douglas