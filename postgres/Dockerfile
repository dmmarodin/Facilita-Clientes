FROM postgres:16.1-bookworm

COPY data.sql .
COPY run.sh ./docker-entrypoint-initdb.d

# CMD ["./run.sh"]
# CMD ["tail", "-f", "/dev/null"]