import { Sequelize } from "sequelize";
import "dotenv/config"

if(!process.env.DATABASE_URL){
   throw new Error("DATABASEL_URL não definida")
}

export const database = new Sequelize(process.env.DATABASE_URL, { 
   dialect: 'postgres',
   logging: false,
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false,
      }
   }
})