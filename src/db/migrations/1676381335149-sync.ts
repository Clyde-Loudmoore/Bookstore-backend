import { MigrationInterface, QueryRunner } from "typeorm";

export class sync1676381335149 implements MigrationInterface {
    name = 'sync1676381335149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_comment" DROP COLUMN "createdTime"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_comment"
            ADD "createdTime" date NOT NULL DEFAULT now()
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user_comment" DROP COLUMN "createdTime"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_comment"
            ADD "createdTime" TIME WITH TIME ZONE NOT NULL DEFAULT now()
        `);
    }

}
