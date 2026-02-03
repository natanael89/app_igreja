import { Sequelize } from "sequelize";
import { DATABASE_URL, NODE_ENV } from "../config/env";

export const database = new Sequelize(DATABASE_URL, { 
   dialect: 'postgres',
   logging: false,
   dialectOptions: 
      NODE_ENV === 'production'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
      }
      : {}
   
})