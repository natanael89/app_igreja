import { Request, Response } from "express";
import { categoryService } from "../services/category.Service";
import { gatPaginationParams } from "../helpers/getPaginationParams";


export const categoriesController = {
    index: async (req: Request, res: Response) => {
        const [page, perPage] = gatPaginationParams(req.query)

        try {
            const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

            return res.json(paginatedCategories)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ massage: error.message })
            }
        }

    }, 
   
    show: async (req: Request, res: Response) => {
        const id  = req.params.id as string

        try {
            const category = await categoryService.findByIdWithCourses(id)
            return res.json(category)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    }
}