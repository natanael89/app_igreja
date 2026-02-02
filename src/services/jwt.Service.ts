import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken'
import "dotenv/config"

interface TokenPayload {
    id: number,
    email: string
}

const secret: Secret = String(process.env.JWT_SECRET)

export const jwtService = {
    signToken: (payload: string | object | Buffer, expiration: string ): string => {
        return jwt.sign(payload, secret, { expiresIn: expiration } as SignOptions)
    },
    
    verifyToken(token: string ): TokenPayload {
        return jwt.verify(token,process.env.JWT_SECRET as string) as TokenPayload;
    }   
    
}
