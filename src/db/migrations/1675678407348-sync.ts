import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1675678407348 implements MigrationInterface {
    name = 'sync1675678407348'

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
        await queryRunner.query(`
            CREATE TABLE "user_comment" (
                "id" SERIAL NOT NULL,
                "text" character varying NOT NULL,
                "bookId" integer NOT NULL,
                "userId" integer NOT NULL,
                "createdTime" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_09bced71952353c5ae4e40f0f52" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "book" (
                "id" SERIAL NOT NULL,
                "bookCover" character varying,
                "title" character varying,
                "author" character varying NOT NULL,
                "description" character varying NOT NULL,
                "rating" character varying,
                "binding" character varying NOT NULL,
                "price" double precision NOT NULL,
                "dateOfIssue" date NOT NULL,
                CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "book_rating" (
                "id" SERIAL NOT NULL,
                "bookId" integer NOT NULL,
                "userId" integer NOT NULL,
                "rating" character varying NOT NULL,
                CONSTRAINT "PK_c883e6b2f58f75d18653ccdefc4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "liked_book" (
                "id" SERIAL NOT NULL,
                "bookId" integer NOT NULL,
                "userId" integer NOT NULL,
                CONSTRAINT "PK_71a1ea530b4eb22d96fe7653686" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "cart" (
                "id" SERIAL NOT NULL,
                "bookId" integer NOT NULL,
                "userId" integer NOT NULL,
                "price" numeric NOT NULL,
                "title" character varying NOT NULL,
                "author" character varying NOT NULL,
                "cover" character varying NOT NULL,
                "quantityOfGoods" numeric NOT NULL DEFAULT '1',
                CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "book_genre_genre" (
                "bookId" integer NOT NULL,
                "genreId" integer NOT NULL,
                CONSTRAINT "PK_7b8c83da852574d44c4f7f9cd66" PRIMARY KEY ("bookId", "genreId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_1ea0184b15eabed75957f55a5b" ON "book_genre_genre" ("bookId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_e58420b1bc65de398197d07a40" ON "book_genre_genre" ("genreId")
        `);
        await queryRunner.query(`
            ALTER TABLE "user_comment"
            ADD CONSTRAINT "FK_ebd475b57b16b0039934dc31a14" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "user_comment"
            ADD CONSTRAINT "FK_662da7eaf5f8d28558ee7fddfa4" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "book_rating"
            ADD CONSTRAINT "FK_a5717207cdadebd106a9a93d635" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "book_rating"
            ADD CONSTRAINT "FK_36a3c8762d1f4a20afd1be74f19" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "liked_book"
            ADD CONSTRAINT "FK_96325209a35e035f8be9a4455b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "liked_book"
            ADD CONSTRAINT "FK_007d39df5109688f941296c0ce3" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "cart"
            ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "cart"
            ADD CONSTRAINT "FK_15605eba0be4c6669389090dd15" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "book_genre_genre"
            ADD CONSTRAINT "FK_1ea0184b15eabed75957f55a5b2" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE
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
            ALTER TABLE "book_genre_genre" DROP CONSTRAINT "FK_1ea0184b15eabed75957f55a5b2"
        `);
        await queryRunner.query(`
            ALTER TABLE "cart" DROP CONSTRAINT "FK_15605eba0be4c6669389090dd15"
        `);
        await queryRunner.query(`
            ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"
        `);
        await queryRunner.query(`
            ALTER TABLE "liked_book" DROP CONSTRAINT "FK_007d39df5109688f941296c0ce3"
        `);
        await queryRunner.query(`
            ALTER TABLE "liked_book" DROP CONSTRAINT "FK_96325209a35e035f8be9a4455b9"
        `);
        await queryRunner.query(`
            ALTER TABLE "book_rating" DROP CONSTRAINT "FK_36a3c8762d1f4a20afd1be74f19"
        `);
        await queryRunner.query(`
            ALTER TABLE "book_rating" DROP CONSTRAINT "FK_a5717207cdadebd106a9a93d635"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_comment" DROP CONSTRAINT "FK_662da7eaf5f8d28558ee7fddfa4"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_comment" DROP CONSTRAINT "FK_ebd475b57b16b0039934dc31a14"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_e58420b1bc65de398197d07a40"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_1ea0184b15eabed75957f55a5b"
        `);
        await queryRunner.query(`
            DROP TABLE "book_genre_genre"
        `);
        await queryRunner.query(`
            DROP TABLE "cart"
        `);
        await queryRunner.query(`
            DROP TABLE "liked_book"
        `);
        await queryRunner.query(`
            DROP TABLE "book_rating"
        `);
        await queryRunner.query(`
            DROP TABLE "book"
        `);
        await queryRunner.query(`
            DROP TABLE "user_comment"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "genre"
        `);
    }

}
