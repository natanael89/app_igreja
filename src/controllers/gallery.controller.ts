import { Request, Response } from 'express'
import { Gallery, Gallery_Image } from '../models'

export const galleryController = {
    async index(_req: Request, res: Response) {
        try {
            const galleries = await Gallery.findAll({
                include: {
                    association: 'gallery_images',
                    attributes: ['id', 'image_url', 'position']
                },
                attributes: ['id', 'title', 'description', 'cover_url', 'category_id', 'createdAt']
            })

            return res.json(galleries)
        } catch (err) {
            return res.status(500).json({ message: 'erro ao listar galerias' })
        }
    },

    async show(req: Request, res: Response) {
        const { id } = req.params

        try {
            const gallery = await Gallery.findByPk(id, {
                include: {
                    association: 'gallery_images',
                    attributes: ['id', 'image_url', 'position'],
                    order: [['position', 'ASC']]
                },
                attributes: ['id', 'title', 'description', 'cover_url', 'category_id', 'createdAt']
            })

            if (!gallery) {
                return res.status(404).json({ message: 'galeria não encontrada' })
            }

            return res.json(gallery)
        } catch (err) {
            return res.status(500).json({ message: 'erro ao buscar galeria' })
        }
    },

    async showByCategory(req: Request, res: Response) {
        const { categoryId } = req.params

        try {
            const galleries = await Gallery.findAll({
                where: { category_id: categoryId },
                include: {
                    association: 'gallery_images',
                    attributes: ['id', 'image_url', 'position'],
                    order: [['position', 'ASC']]
                },
                attributes: ['id', 'title', 'description', 'cover_url', 'createdAt']
            })

            return res.json(galleries)
        } catch (err) {
            return res.status(500).json({ message: 'erro ao listar galerias da categoria' })
        }
    }
}
