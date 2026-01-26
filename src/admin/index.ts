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
    }
})

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminJs, 
    authetenticationOptions, 
    null,
    { resave: false, saveUninitialized: false, secret: 'cafe'}
)