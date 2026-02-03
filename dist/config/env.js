"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_ENV = exports.JWT_SECRET = exports.DATABASE_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
if (!process.env.DATABASE_URL) {
    throw new Error("A variável DATABSE_URL está faltando no ambiente!");
}
exports.DATABASE_URL = "postgresql://igreja_db_gtdt_user:cTDD2zjE0259SAShBU6RNInbkg6OYoi1@dpg-d5rqlcngi27c73f6rdg0-a.ohio-postgres.render.com:5432/igreja_db_gtdt;";
exports.JWT_SECRET = process.env.JWT_SECRET || "default_secret";
exports.NODE_ENV = process.env.NODE_ENV || "development";
//# sourceMappingURL=env.js.map