\connect "facilita_douglas";

CREATE SEQUENCE clientes_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."clientes" (
    "id" bigint DEFAULT nextval('clientes_id_seq') NOT NULL,
    "name" character varying(60) NOT NULL,
    "email" character varying(60) NOT NULL,
    "telefone" character varying(14) NOT NULL,
    "coord_x" smallint NOT NULL,
    "coord_y" smallint NOT NULL,
    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "clientes" ("id", "name", "email", "telefone", "coord_x", "coord_y") VALUES
(1,	'Douglas',	'douglasmarodin@gmail.com',	'54981360710', 1, 5),
(2,	'Amanda',	'amanda@teste.com', '1134221199', 2, 1),
(3,	'Alex',	'alex@teste.com', '11985522222', 4, 5),
(4,	'Márcia',	'marcia@teste.com', '55911111111', 3, 6),
(5,	'Fabrício',	'fabricio@teste.com', '42992210000', 3, 0),
(6,	'Andressa',	'andressa@teste.com', '54997121010', 4, 1);