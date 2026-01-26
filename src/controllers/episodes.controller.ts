// import { Request, Response } from "express";
// import { AuthenticatedRequest } from '../middlewares/auth'
// import { episodesService } from '../services/episode.Service'

// export const episodesController = {
//     stream: async (req: Request, res: Response) => {
//         const { video_url } = req.query
//         const range = req.headers.range
       

//         try {
//             if(typeof video_url !== 'string'){
//                 throw new Error('videoUrl must be of type \'string\'')
//             }

//             episodesService.streamEpisodeToResponse(res, video_url, range)
//         } catch (error) {
//             if(error instanceof Error){
//                 return res.status(400).json({ message: error})
//             }
//         }


//     },

//     getWatchTime: async (req: AuthenticatedRequest, res: Response) => {
//         const userId = req.user!.id
//         const episodeId = req.params.id

//         try {
//             const watchTime = await episodesService.getWatchTime(userId, Number(episodeId))
//             return res.json(watchTime)
//         } catch (error) {
//             if(error instanceof Error){
//                 return res.status(400).json({ message: error.message })
//             }
//         }
//     },

//     setWatchTime: async (req: AuthenticatedRequest, res: Response) => {
//         const userId = req.user!.id
//         const episodeId = Number(req.params.id)
//         const { seconds } = req.body

//         try {
//             const watchTime = await episodesService.setWatchTime({
//                 episode_id: episodeId,
//                 user_id: userId,
//                 seconds
//             })
//             return res.json(watchTime)
//         } catch (error) {
//             if(error instanceof Error){
//                return res.status(400).json({ message: error.message })
//             }
//         }
//     }
// }