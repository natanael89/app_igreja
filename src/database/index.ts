import { Sequelize } from "sequelize";
import "dotenv/config"

if(!process.env.DATABASEL_URL){
   throw new Error("DATABASEL_URL não definida")
}

export const database = new Sequelize(process.env.DATABASEL_URL, { 
   dialect: 'postgres',
   logging: false,
   dialectOptions: {
      ssl: {
         require: true,
         rejectUnauthorized: false,
      }
   }
})