import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { favoriteService } from "../services/favorite.Service";

export const favoritesController = {
    save: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const { dailyPosId } = req.body

        try {
            const favorite = await favoriteService.create(userId, dailyPosId)
            return res.status(201).json(favorite)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    index: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id

        try {
            const favorites = await favoriteService.findByUserId(userId)
            return res.json(favorites)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    delete: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const dailyPosId = Number(req.params.id)

        try {
            await favoriteService.delete(userId, dailyPosId)
            return res.status(204).json()
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    }
}