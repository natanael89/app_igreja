import { Op } from "sequelize";
import { Video } from "../models/Video";

export const videoService = {
    findById: async (id: string) => {
        return Video.findByPk(id, {
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
        })
    },

    getRandomFeaturedVideos: async () => {
        const videos = await Video.findAll({
            where: {
                featured: true
            },
            attributes: [
                "id",
                "title",
                "description",
                ["thumbnail_url", "thumbnailUrl"],
            ],
        })

        return videos.sort(() => 0.5 - Math.random()).slice(0, 3)
    },

    getLatestVideos: async () => {
        return Video.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        })
    },

    findByTitle: async (title: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await Video.findAndCountAll({
            where: {
                title: {
                    [Op.iLike]: `${title}`
                }
            },
            limit: perPage,
            offset
        })

        return {
            videos: rows,
            page,
            perPage,
            total: count
        }
    },

    getMostWatched: async (limit = 10) => {
       return Video.findAll({
         order: [['views', 'DESC']],
         limit,
       })
    }
}