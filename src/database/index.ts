import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config/env";
import "dotenv/config"

if(!DATABASE_URL){
   throw new Error("DATABASE_URL não definida")
}

export const database = new Sequelize(DATABASE_URL, { 
   dialect: 'postgres',
   logging: false,
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false,
      }
   }
})