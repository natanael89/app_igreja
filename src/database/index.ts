import { Sequelize } from "sequelize";
import "dotenv/config"

export const database = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? Number(process.env.DB_HOST) : 5432,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: String(process.env.DB_PASSWORD),
    define: {
        underscored: true
    }
})