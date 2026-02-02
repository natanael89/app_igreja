"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuth = ensureAuth;
exports.ensureAuthViaQuery = ensureAuthViaQuery;
const jwt_Service_1 = require("../services/jwt.Service");
const user_Service_1 = require("../services/user.Service");
async function ensureAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'Token não informado' });
        }
        const token = authHeader.replace('Bearer ', '');
        const decoded = jwt_Service_1.jwtService.verifyToken(token);
        const user = await user_Service_1.userService.findByEmail(decoded.email);
        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        req.user = user;
        return next();
    }
    catch (_a) {
        return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
}
async function ensureAuthViaQuery(req, res, next) {
    const { token } = req.query;
    if (!token) {
        return res.status(401).json({ message: 'Não autorizado: nenhum token foi encontrado.' });
    }
    if (typeof token !== 'string') {
        return res.status(400).json({ message: 'O parâmetro token deve ser do tipo string.' });
    }
    try {
        const decoded = jwt_Service_1.jwtService.verifyToken(token);
        const user = await user_Service_1.userService.findByEmail(decoded.email);
        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        req.user = user;
        return next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Não autorizado: token inválido.'
        });
    }
}
//# sourceMappingURL=auth.js.map