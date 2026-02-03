import dotenv from "dotenv";

dotenv.config()

export const DATABASEL_URL = process.env.DATABASEL_URL || ""
export const JWT_SECRET = process.env.JWT_SECRET || ""
export const NODE_ENV = process.env.NODE_ENV || "development"