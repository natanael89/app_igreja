import { User } from "../models"
import { database } from "../database"

async function createAdmin() {
    await database.authenticate()

    await User.create({
        firstName: "Admin",
        lastName:"Master",
        phone: "000000000",
        birth: new Date(),
        email: "admin@igreja.com",
        password: "123456",
        role: "admin"
    })
    console.log("Admin criado com sucesso")
}

createAdmin()