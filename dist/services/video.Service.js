"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoService = void 0;
const sequelize_1 = require("sequelize");
const Video_1 = require("../models/Video");
exports.videoService = {
    findById: async (id) => {
        return Video_1.Video.findByPk(id, {
            attributes: [
                "id",
                "title",
                "description",
                ["video_url", "videoUrl"],
                ["thumbnail_url", "thumbnailUrl"],
                "featured",
                "views",
                "created_at"
            ]
        });
    },
    getRandomFeaturedVideos: async () => {
        const videos = await Video_1.Video.findAll({
            where: {
                featured: true
            },
            attributes: [
                "id",
                "title",
                "description",
                ["thumbnail_url", "thumbnailUrl"],
            ],
        });
        return videos.sort(() => 0.5 - Math.random()).slice(0, 3);
    },
    getLatestVideos: async () => {
        return Video_1.Video.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        });
    },
    findByTitle: async (title, page, perPage) => {
        const offset = (page - 1) * perPage;
        const { count, rows } = await Video_1.Video.findAndCountAll({
            where: {
                title: {
                    [sequelize_1.Op.iLike]: `${title}`
                }
            },
            limit: perPage,
            offset
        });
        return {
            videos: rows,
            page,
            perPage,
            total: count
        };
    },
    getMostWatched: async (limit = 10) => {
        return Video_1.Video.findAll({
            order: [['views', 'DESC']],
            limit,
        });
    }
};
//# sourceMappingURL=video.Service.js.map