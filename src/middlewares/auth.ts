import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models";
import { jwtService } from "../services/jwt.Service";
import { userService } from "../services/user.Service";

export interface AuthenticatedRequest extends Request {
    user?: User | null
}

export async function ensureAuth(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({ message: 'Token não informado' })
        }

        const token = authHeader.replace('Bearer ', '')

        const decoded = jwtService.verifyToken(token)

        const user = await userService.findById(decoded.id)

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' })
        }

        req.user = user
        next()
    } catch {
        return res.status(401).json({ message: 'Token inválido ou expirado' })
    }
}

