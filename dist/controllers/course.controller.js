"use strict";
// import { Request, Response } from "express";
// import { courseService } from "../services/course.Service";
// import { gatPaginationParams } from "../helpers/getPaginationParams";
Object.defineProperty(exports, "__esModule", { value: true });
// export const coursesController = {
//     // GET /coourses/:id
//     show: async (req: Request, res: Response) => {
//         const { id } = req.params
//         try {
//             const course = await courseService.findByIdWithEpisodes(id)
//             return res.json(course)
//         } catch (error) {
//             if(error){
//                 return res.status(400).json({ message: error })
//             }
//         }
//     },
//     features: async (req: Request, res: Response) => {
//         try {
//             const featuredCourses = await courseService.getRandomFeaturedCourses()
//             return res.json(featuredCourses)
//         } catch (error) {
//             if(error){
//                 return res.status(400).json({ message: error})
//             }
//         }
//     },
//     newest: async (req: Request, res: Response) => {
//         try {
//             const newestCourses = await courseService.getTopTenNewest()
//             return res.json(newestCourses)
//         } catch (error) {
//             if(error){
//                 return res.status(400).json({ message: error })
//             }
//         }
//     },
//     popular: async (req: Request, res: Response) => {
//          try {
//             const topTen = await courseService.getTopTenByLikes()
//             return res.json(topTen)
//          } catch (error) {
//             if(error instanceof Error){
//                 return res.status(400).json({ message: error.message })
//             }
//          }
//     },
//     search: async (req: Request, res: Response) => {
//         const { name } = req.params
//         const [page, perPage] = gatPaginationParams(req.query)
//         try {
//             if(typeof name !== 'string') throw new Error('name param must be of type string')
//             const courses = await courseService.findByName(name, page, perPage)
//             return res.json(courses)
//         } catch (error) {
//             if(error){
//                 return res.status(400).json({ message: error })
//             }
//         }
//     }
// }
//# sourceMappingURL=course.controller.js.map