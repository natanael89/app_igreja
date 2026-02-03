"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const database_1 = require("../database");
async function createAdmin() {
    await database_1.database.authenticate();
    await models_1.User.create({
        firstName: "Admin",
        lastName: "Master",
        phone: "000000000",
        birth: new Date(),
        email: "admin@igreja.com",
        password: "123456",
        role: "admin"
    });
    console.log("Admin criado com sucesso");
}
createAdmin();
//# sourceMappingURL=createAdmin.js.map