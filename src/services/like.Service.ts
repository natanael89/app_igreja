import { Like } from "../models";

export const likeService = {
    create: async (userId: number, dailyPostId: number) => {
        const like = await Like.create({
            user_id: userId,
            daily_post_id: dailyPostId
        })

        return like
    },

    delete: async (userId: number, dailyPostId: number) => {
       await Like.destroy({
            where: {
                daily_post_id: dailyPostId,
                user_id: userId
            }
        })
    },

    isLike: async (userId: number, dailyPostId: number) => {
        const like = await Like.findOne({
            where: {
                user_id: userId,
                daily_post_id: dailyPostId
            }
        })
        return like !== null ? true : false
    }
}