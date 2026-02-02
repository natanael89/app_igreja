"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeService = void 0;
const models_1 = require("../models");
exports.likeService = {
    create: async (userId, dailyPostId) => {
        const like = await models_1.Like.create({
            user_id: userId,
            daily_post_id: dailyPostId
        });
        return like;
    },
    delete: async (userId, dailyPostId) => {
        await models_1.Like.destroy({
            where: {
                daily_post_id: dailyPostId,
                user_id: userId
            }
        });
    },
    isLike: async (userId, dailyPostId) => {
        const like = await models_1.Like.findOne({
            where: {
                user_id: userId,
                daily_post_id: dailyPostId
            }
        });
        return like !== null ? true : false;
    }
};
//# sourceMappingURL=like.Service.js.map