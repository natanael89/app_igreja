"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
const models_1 = require("../models");
exports.categoryService = {
    findAllPaginated: async (page, perPage) => {
        const offset = (page - 1) * perPage;
        const { count, rows } = await models_1.Category.findAndCountAll({
            attributes: ['id', 'name', 'position'],
            order: [['position', 'ASC']],
            limit: perPage,
            offset
        });
        return {
            categories: rows,
            page,
            perPage,
            total: count
        };
    },
    findByIdWithCourses: async (id) => {
        const categoryWithCourses = await models_1.Category.findByPk(id, {
            attributes: ['id', 'name'],
            include: [
                {
                    association: 'dailyPosts',
                    attributes: ['id', 'title', 'content', 'image_url', 'featured'],
                },
                {
                    association: 'videos',
                    attributes: ['id', 'title', 'description', 'thumbnailUrl', 'videoUrl', 'views']
                }
            ],
            order: [
                [{ model: models_1.Video, as: 'videos' }, 'order', 'ASC']
            ]
        });
        return categoryWithCourses;
    }
};
//# sourceMappingURL=category.Service.js.map