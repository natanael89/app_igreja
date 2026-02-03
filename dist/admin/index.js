"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminJsRouter = exports.adminJs = void 0;
const adminjs_1 = __importDefault(require("adminjs"));
const express_1 = __importDefault(require("@adminjs/express"));
const AdminJSSequelize = __importStar(require("@adminjs/sequelize"));
const database_1 = require("../database");
const resources_1 = require("./resources");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dashboard_1 = require("./dashboard");
const componentLoader_1 = require("./componentLoader");
const locale_1 = require("./locale");
const env_1 = require("../config/env");
const models_1 = require("../models");
const express_session_1 = __importDefault(require("express-session"));
const connect_session_sequelize_1 = __importDefault(require("connect-session-sequelize"));
const SequelizeStore = (0, connect_session_sequelize_1.default)(express_session_1.default.Store);
const sessionStore = new SequelizeStore({
    db: database_1.database,
});
sessionStore.sync();
adminjs_1.default.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database
});
exports.adminJs = new adminjs_1.default({
    databases: [database_1.database],
    resources: resources_1.adminJsResources,
    rootPath: '/admin',
    componentLoader: componentLoader_1.componentLoader,
    dashboard: dashboard_1.dashboardOptions,
    locale: locale_1.locale,
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
});
exports.adminJsRouter = express_1.default.buildAuthenticatedRouter(exports.adminJs, {
    authenticate: async (email, password) => {
        const user = await models_1.User.findOne({ where: { email } });
        if (user && user.role === "admin") {
            const matched = await bcryptjs_1.default.compare(password, user.password);
            if (matched) {
                return user;
            }
        }
        return false;
    },
    cookiePassword: env_1.ADMINJS_COOKIE_PASSWORD
}, null, {
    store: sessionStore,
    secret: env_1.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
});
//# sourceMappingURL=index.js.map