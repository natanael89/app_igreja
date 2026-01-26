import { Request, Response } from "express";
import { dailyPostService } from "../services/dailyPost.Service";
import { gatPaginationParams } from "../helpers/getPaginationParams";


export const dailyPostController = {
    index: async (req: Request, res: Response ) => {

        try {
            const posts = await dailyPostService.getLatestPosts();
            return res.json(posts)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const post = await dailyPostService.findById(id)
            return res.json(post)
        } catch (error) {
            if(error instanceof Error){
               return res.status(400).json({ message: error.message })
            }
        }
    },

    featured: async (req: Request, res: Response ) => {
        try {
            const post = await dailyPostService.getRandomFeaturedPosts()
            return res.json(post)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message})
            }
        }
    },

    popular: async (req: Request, res: Response ) => {
        try {
            const posts = await dailyPostService.getPopularPosts()
            return res.json(posts)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    search: async (req: Request, res: Response) => {
        const { name } = req.query
        const [page, perPage] = gatPaginationParams(req.query)

        try {
            const result = await dailyPostService.searchByTitle(
                String(name),
                page,
                perPage
            )

            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    }
}