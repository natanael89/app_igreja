"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteService = void 0;
const models_1 = require("../models");
exports.favoriteService = {
    create: async (userId, dailyPostId) => {
        const favorite = await models_1.Favorite.create({
            user_id: userId,
            daily_post_id: dailyPostId
        });
        return favorite;
    },
    findByUserId: async (userId) => {
        const favorites = await models_1.Favorite.findAll({
            attributes: [['user_id', 'userId']],
            where: { user_id: userId },
            include: {
                association: 'dailyPost',
                attributes: [
                    'id',
                    'title',
                    'content',
                    ['image_url', 'imageUrl']
                ]
            }
        });
        return {
            userId,
            dailyPost: favorites.map(favorite => favorite.dailyPost)
        };
    },
    delete: async (userId, dailyPosId) => {
        await models_1.Favorite.destroy({
            where: {
                user_id: userId,
                daily_post_id: dailyPosId
            }
        });
    }
};
//# sourceMappingURL=favorite.Service.js.map