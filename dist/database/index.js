"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
const env_1 = require("../config/env");
exports.database = new sequelize_1.Sequelize(env_1.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: env_1.NODE_ENV === 'production'
        ? {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
        : {}
});
//# sourceMappingURL=index.js.map