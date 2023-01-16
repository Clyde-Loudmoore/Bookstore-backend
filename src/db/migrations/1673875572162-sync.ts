import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1673875572162 implements MigrationInterface {
    name = 'sync1673875572162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "book" (
                "id" SERIAL NOT NULL,
                "bookCover" character varying,
                "title" character varying,
                "author" character varying NOT NULL,
                "genre" character varying NOT NULL,
                "description" character varying NOT NULL,
                "rating" double precision,
                "binding" character varying NOT NULL,
                "comments" character varying,
                CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "avatar" character varying,
                "fullName" character varying,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "book"
        `);
    }

}
