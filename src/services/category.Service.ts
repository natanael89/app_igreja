import { Category, Video } from "../models";

export const categoryService = {
    findAllPaginated: async (page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await Category.findAndCountAll({
            attributes: ['id', 'name', 'position'],
            order: [['position', 'ASC']],
            limit: perPage,
            offset
        })

        return {
            categories: rows,
            page,
            perPage,
            total: count
        }
    },

    findByIdWithCourses: async (id: string) => {
        const categoryWithCourses = await Category.findByPk(id, {
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
                [{ model: Video, as: 'videos'}, 'order', 'ASC']
            ]
        })
        return categoryWithCourses
    }
}