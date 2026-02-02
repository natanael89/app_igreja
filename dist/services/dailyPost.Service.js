"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyPostService = void 0;
const sequelize_1 = require("sequelize");
const DailyPost_1 = require("../models/DailyPost");
exports.dailyPostService = {
    findById: async (id) => {
        return DailyPost_1.DailyPost.findByPk(id, {
            attributes: [
                "id",
                "title",
                "content",
                ["image_url", "imageUrl"],
                "featured",
                "created_at",
            ]
        });
    },
    getRandomFeaturedPosts: async () => {
        const post = await DailyPost_1.DailyPost.findAll({
            where: { featured: true },
            attributes: ["id", "title", "content", ["image_url", "imageUrl"]],
        });
        return post.sort(() => 0.5 - Math.random()).slice(0, 1);
    },
    getLatestPosts: async () => {
        return DailyPost_1.DailyPost.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        });
    },
    findByTitle: async (title, page, perPage) => {
        const offset = (page - 1) * perPage;
        const { count, rows } = await DailyPost_1.DailyPost.findAndCountAll({
            where: {
                title: {
                    [sequelize_1.Op.iLike]: `%${title}%`,
                },
            },
            limit: perPage,
            offset,
        });
        return {
            posts: rows,
            page,
            perPage,
            total: count,
        };
    },
    getPopularPosts: async () => {
        var _a;
        const results = await ((_a = DailyPost_1.DailyPost.sequelize) === null || _a === void 0 ? void 0 : _a.query(`
              SELECT
                daily_posts.id,
                daily_posts.title,
                daily_posts.content,
                daily_posts.image_url AS "imageUrl",
                COUNT(likes.id) AS likes
              FROM daily_posts
              LEFT JOIN likes
                ON daily_posts.id = likes.daily_post_id
              GROUP BY daily_posts.id
              ORDER BY likes DESC
              LIMIT 10;
            
            `));
        if (results) {
            const [topTen] = results;
            return topTen;
        }
        return null;
    },
    searchByTitle: async (title, page, perPage) => {
        const offset = (page - 1) * perPage;
        const { count, rows } = await DailyPost_1.DailyPost.findAndCountAll({
            attributes: [
                "id",
                "title",
                "content",
                ["image_url", "imageUrl"],
            ],
            where: {
                title: {
                    [sequelize_1.Op.iLike]: `%${title}%`,
                }
            },
            limit: perPage,
            offset
        });
        return {
            posts: rows,
            page,
            perPage,
            total: count
        };
    }
};
//# sourceMappingURL=dailyPost.Service.js.map