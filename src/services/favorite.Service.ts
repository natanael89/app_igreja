import { Favorite } from "../models";

export const favoriteService = {
    create: async (userId: number, dailyPostId: number) => {
        const favorite = await Favorite.create({
            user_id: userId,
            daily_post_id: dailyPostId
        })

        return favorite
    },

    findByUserId: async (userId: number) => {
        const favorites = await Favorite.findAll({
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
        })

        return {
            userId,
            dailyPost: favorites.map(favorite => favorite.dailyPost)
        }
    },

    delete: async (userId: number, dailyPosId: number) => {
        await Favorite.destroy({
            where: {
                user_id: userId,
                daily_post_id: dailyPosId
            }
        })
    }
}