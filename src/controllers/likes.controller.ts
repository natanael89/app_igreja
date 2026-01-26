import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { likeService } from "../services/like.Service";

export const likesController = {
    save: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const { dailyPostId } = req.body

        try {
            const like = await likeService.create(userId, dailyPostId)
            return res.status(201).json(like)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message})
            }
        }
    },

    delete: async (req: AuthenticatedRequest, res: Response ) => {
        const userId = req.user!.id
        const dailyPostId = req.params.id

        try {
            await likeService.delete(userId, Number(dailyPostId))
            return res.status(204).send()
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message})
            }
        }
    }
}