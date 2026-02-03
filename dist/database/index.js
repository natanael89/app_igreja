"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const env_1 = require("../config/env");
if (!env_1.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}
exports.database = new sequelize_1.Sequelize(env_1.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
});
//# sourceMappingURL=index.js.map