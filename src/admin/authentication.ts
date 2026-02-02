import { AuthenticationOptions } from "@adminjs/express";
import { User } from "../models";
import bcryptjs from "bcryptjs";
import "dotenv/config"

export const authetenticationOptions: AuthenticationOptions = {
    authenticate: async (email, password) => {
        const user = await User.findOne({ where: { email } })

        if (user && user.role === "admin"){
            const matched = await bcryptjs.compare(password, user.password)

            if(matched){
                return user
            }
        }

        return false
    },
    cookiePassword: process.env.JWT_SECRET as string
}