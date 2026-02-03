import AdminJS from "adminjs"
import AdminJsExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'
import { database } from "../database"
import { adminJsResources } from "./resources"
import bcryptjs from "bcryptjs"
import { authetenticationOptions } from "./authentication"
import { dashboardOptions } from "./dashboard"
import { componentLoader, Components } from "./componentLoader"
import { locale } from "./locale"
import { ADMINJS_COOKIE_PASSWORD, JWT_SECRET, NODE_ENV } from "../config/env"
import { User } from "../models"
import session from "express-session"
import SequelizeStoreInit from "connect-session-sequelize"



const SequelizeStore = SequelizeStoreInit(session.Store)

const sessionStore = new SequelizeStore({
    db: database,
})

sessionStore.sync()


AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
})

export const adminJs = new AdminJS({
    databases: [database],
    resources: adminJsResources,
    rootPath: '/admin',
    componentLoader,
    dashboard: dashboardOptions,
    locale: locale,
    branding: {
        companyName: 'IgrejaAdmin',
        logo: false,
        theme: {
            colors: {
                 primary100: '#2ecc71',
                 primary200: '#27ae60',
                 primary300: '#1e8449',
            }
        }
    },
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminJs, 
    {
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
        cookiePassword: ADMINJS_COOKIE_PASSWORD as string
    },
    null,
    { 
        store: sessionStore,
        secret: JWT_SECRET,
        resave: false, 
        saveUninitialized: false,
    }
)