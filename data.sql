\connect "facilita_douglas";

DROP TABLE IF EXISTS "clientes";
DROP SEQUENCE IF EXISTS clientes_id_seq;
CREATE SEQUENCE clientes_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."clientes" (
    "id" bigint DEFAULT nextval('clientes_id_seq') NOT NULL,
    "name" character varying(60) NOT NULL,
    "email" character varying(60) NOT NULL,
    "telefone" character varying(14) NOT NULL,
    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "clientes" ("id", "name", "email", "telefone") VALUES
(1,	'Douglas Marodin',	'douglasmarodin@gmail.com',	'54981360710');