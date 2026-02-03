import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config/env";

if(!DATABASE_URL){
   throw new Error("DATABASE_URL is not defined")
}

export const database = new Sequelize(DATABASE_URL, { 
   dialect: 'postgres',
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false,
      }
   }
})