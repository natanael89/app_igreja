import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/user.Service";

export const usersController = {
    watching: async (req: AuthenticatedRequest, res: Response) => {
        const { id } = req.user!

        try {
            const watching = await userService.getKeepWatchingList(id)
            return res.json(watching)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    show: async (req: AuthenticatedRequest, res: Response) => {
        const currentUser = req.user

        try {
            return res.json(currentUser)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    },

    update: async (req: AuthenticatedRequest, res: Response) => {
        const { id } = req.user!
        const { firstName, lastName, phone, email, birth } = req.body

        try {
            const updatedUser = await userService.update(id, {
                firstName,
                lastName,
                phone,
                email,
                birth
            })

            return res.json(updatedUser)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }

    },

    updatePassword: async (req: AuthenticatedRequest, res: Response) => {
        const user = req.user
        const { currentPassword, newPassword } = req.body

        if(!user){
            return res.status(401).json({ message: 'Não autorizado!' })
        }

        try {
            user.checKPassword(currentPassword, async (error, isSame) => {
                if(error){
                    return res.status(400).json({ message: error.message })
                }

                if(!isSame){
                    return res.status(204).json({ message: 'Senha incorreta' })
                }

                await userService.updatePasseord(user.id, newPassword)
                return res.status(204).send
            })
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({ message: error.message })
            }
        }
    }
}