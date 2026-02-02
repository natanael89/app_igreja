"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authetenticationOptions = void 0;
const models_1 = require("../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
require("dotenv/config");
exports.authetenticationOptions = {
    authenticate: async (email, password) => {
        const user = await models_1.User.findOne({ where: { email } });
        if (user && user.role === "admin") {
            const matched = await bcryptjs_1.default.compare(password, user.password);
            if (matched) {
                return user;
            }
        }
        return false;
    },
    cookiePassword: process.env.JWT_SECRET
};
//# sourceMappingURL=authentication.js.map