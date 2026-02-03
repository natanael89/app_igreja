"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMINJS_COOKIE_PASSWORD = exports.NODE_ENV = exports.JWT_SECRET = exports.DATABASE_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
if (!process.env.DATABASE_URL) {
    throw new Error("A variável DATABSE_URL está faltando no ambiente!");
}
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.JWT_SECRET = process.env.JWT_SECRET || "default_secret";
exports.NODE_ENV = process.env.NODE_ENV || "development";
exports.ADMINJS_COOKIE_PASSWORD = process.env.ADMINJS_COOKIE_PASSWORD;
//# sourceMappingURL=env.js.map