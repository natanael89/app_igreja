"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminJsResources = void 0;
const models_1 = require("../../models");
const category_1 = require("./category");
const dailypost_1 = require("./dailypost");
const video_1 = require("./video");
const user_1 = require("./user");
exports.adminJsResources = [
    {
        resource: models_1.Category,
        options: category_1.CategoryResourceOptions,
    },
    {
        resource: models_1.DailyPost,
        options: dailypost_1.DailyPostResourceOptions,
        features: dailypost_1.DailyPostResourceFeatures,
    },
    {
        resource: models_1.Video,
        options: video_1.VideoResourceOptions,
        features: video_1.VideoResourceFeatures
    },
    {
        resource: models_1.User,
        options: user_1.UserResourceOptions,
    }
];
//# sourceMappingURL=index.js.map