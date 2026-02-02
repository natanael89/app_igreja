"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASEL_URL não definida");
}
exports.database = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});
//# sourceMappingURL=index.js.map