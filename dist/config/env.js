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
exports.DATABASE_URL = process.env.DATABASE_URL || "";
exports.JWT_SECRET = process.env.JWT_SECRET || "";
exports.NODE_ENV = process.env.NODE_ENV || "development";
//# sourceMappingURL=env.js.map