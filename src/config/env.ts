import dotenv from "dotenv";


if (process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

if(!process.env.DATABASE_URL){
    throw new Error("A variável DATABSE_URL está faltando no ambiente!")
}

export const DATABASE_URL = process.env.DATABASE_URL;
export const JWT_SECRET = process.env.JWT_SECRET || "default_secret"
export const NODE_ENV = process.env.NODE_ENV || "development"
export const ADMINJS_COOKIE_PASSWORD = process.env.ADMINJS_COOKIE_PASSWORD