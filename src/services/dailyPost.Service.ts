import { Op } from "sequelize";
import { DailyPost } from "../models/DailyPost";

export const dailyPostService = {
    findById: async (id: string) => {
        return DailyPost.findByPk(id, {
            attributes: [
                "id",
                "title",
                "content",
                ["image_url", "imageUrl"],
                "featured",
                "created_at",
            ]
        })
    },

    getRandomFeaturedPosts: async () => {
        const post = await DailyPost.findAll({
            where: { featured: true},
            attributes: ["id", "title", "content", ["image_url", "imageUrl"]],
        });

        return post.sort(() => 0.5 - Math.random()).slice(0, 1)
    },

    getLatestPosts: async () => {
        return DailyPost.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        })
    },

    findByTitle: async (title: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage;

        const { count, rows} = await DailyPost.findAndCountAll({
            where: {
                title: {
                    [Op.iLike]: `%${title}%`,
                },
            },
            limit: perPage,
            offset,
        })

        return {
            posts: rows,
            page,
            perPage,
            total: count,
        }
    },

    getPopularPosts: async () => {
        const results = await DailyPost.sequelize?.query(`
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
            
            `)

            if(results){
                const [topTen] = results
                return topTen
            }

            return null
    },

    searchByTitle: async (title: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await DailyPost.findAndCountAll({
            attributes: [
                "id",
                "title",
                "content",
                ["image_url", "imageUrl"],
            ],
            where: {
                title: {
                    [Op.iLike]: `%${title}%`,
                }
            },
            limit: perPage,
            offset
        })

        return {
            posts: rows,
            page,
            perPage,
            total: count
        }
    }
}