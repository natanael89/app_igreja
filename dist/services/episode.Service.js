"use strict";
// import { Response } from "express";
// import fs from 'fs'
// import path from "path";
// import { WatchTimes } from "../models/WatchTimes";
Object.defineProperty(exports, "__esModule", { value: true });
// export const episodesService = {
//     streamEpisodeToResponse: async (res: Response, video_url: string, range: string | undefined) => {
//         const filePath = path.join(__dirname, '../../uploads', video_url)
//         const fileStat = fs.statSync(filePath)
//         if (range) {
//             const parts = range.replace(/bytes=/, '').split('-')
//             const start = parseInt(parts[0], 10)
//             const end = parts[1] ? parseInt(parts[1], 10) : fileStat.size - 1
//             const chunkSize = (end - start) + 1
//             const file = fs.createReadStream(filePath, { start, end })
//             const head = {
//                 'Content-Range': `bytes ${start}-${end}/${fileStat.size}`,
//                 'Accept-Ranges': 'bytes',
//                 'Content-Length': chunkSize,
//                 'Content-Type': 'video/mp4',
//             }
//             res.writeHead(206, head)
//             file.pipe(res)
//         } else {
//             const head = {
//                 'Content-Length': fileStat.size,
//                 'Content-Type': 'video/mp4',
//             }
//             res.writeHead(200, head)
//             fs.createReadStream(filePath).pipe(res)
//         }
//     },
//     getWatchTime: async (userId: number, espisodeId: number) => {
//         const watchTime = await WatchTimes.findOne({
//             attributes: ['seconds'],
//             where: {
//                 user_id: userId,
//                 episode_id: espisodeId
//             }
//         })
//         return watchTime
//     },
//     setWatchTime: async ({ user_id, episode_id, seconds }: { user_id: number, episode_id: number, seconds: number }) => {
//          const watchTimeAlreadyExists = await WatchTimes.findOne({
//             where: {
//                 user_id,
//                 episode_id
//             }
//          })
//          if(watchTimeAlreadyExists){
//             watchTimeAlreadyExists.seconds = seconds
//             await watchTimeAlreadyExists.save()
//             return watchTimeAlreadyExists
//          } else {
//             const watchTime = await WatchTimes.create({
//                 user_id,
//                 episode_id,
//                 seconds
//             })
//             return watchTime
//          }
//     }
// }
//# sourceMappingURL=episode.Service.js.map