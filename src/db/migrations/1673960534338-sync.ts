import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1673960534338 implements MigrationInterface {
    name = 'sync1673960534338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "genre" (
                "id" SERIAL NOT NULL,
                "genreName" character varying NOT NULL,
                CONSTRAINT "UQ_6aa8d966d5b9f3c9c49f5c27e72" UNIQUE ("genreName"),
                CONSTRAINT "PK_0285d4f1655d080cfcf7d1ab141" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "book_genre_genre"
            ADD CONSTRAINT "FK_e58420b1bc65de398197d07a40e" FOREIGN KEY ("genreId") REFERENCES "genre"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "book_genre_genre" DROP CONSTRAINT "FK_e58420b1bc65de398197d07a40e"
        `);
        await queryRunner.query(`
            DROP TABLE "genre"
        `);
    }

}
