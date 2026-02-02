"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardOptions = void 0;
const models_1 = require("../models");
const componentLoader_1 = require("./componentLoader");
exports.dashboardOptions = {
    component: componentLoader_1.Components.Dashboard,
    handler: async (req, res, context) => {
        const dailypost = await models_1.DailyPost.count();
        const video = await models_1.Video.count();
        const category = await models_1.Category.count();
        const standarUsers = await models_1.User.count({ where: { role: 'user' } });
        const adminUsers = await models_1.User.count({ where: { role: 'admin' } });
        res.json({
            'DailyPost': dailypost,
            'Videos': video,
            'Categorias': category,
            'Usuários Padrão': standarUsers,
            'Usuários Admin': adminUsers
        });
    }
};
//# sourceMappingURL=dashboard.js.map