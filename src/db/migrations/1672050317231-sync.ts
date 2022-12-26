import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1672050317231 implements MigrationInterface {
    name = 'sync1672050317231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "dateOfBirth"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "dateOfBirth" date
        `);
    }

}
