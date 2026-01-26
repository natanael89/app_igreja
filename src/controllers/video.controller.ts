import { Request, Response } from "express";
import { videoService } from "../services/video.Service";
import { gatPaginationParams } from "../helpers/getPaginationParams";


export const videoController = {
    index: async (req: Request, res: Response) => {
        try {
            const videos = await videoService.getLatestVideos();
            return res.json(videos)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    show: async (req: Request, res: Response ) => {
        const { id } = req.params

        try {
            const video = await videoService.findById(id)
            return res.json(video)
        } catch (error) {
            if(error instanceof Error){
              return res.status(400).json({ message: error.message })
            }
        }
    }
}