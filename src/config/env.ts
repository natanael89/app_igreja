import dotenv from "dotenv";


if (process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

if(!process.env.DATABASE_URL){
    throw new Error("A variável DATABSE_URL está faltando no ambiente!")
}

export const DATABASE_URL = "postgresql://igreja_db_gtdt_user:cTDD2zjE0259SAShBU6RNInbkg6OYoi1@dpg-d5rqlcngi27c73f6rdg0-a.ohio-postgres.render.com:5432/igreja_db_gtdt;"
export const JWT_SECRET = process.env.JWT_SECRET || "default_secret"
export const NODE_ENV = process.env.NODE_ENV || "development"