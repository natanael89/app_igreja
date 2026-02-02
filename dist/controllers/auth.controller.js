"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const user_Service_1 = require("../services/user.Service");
const jwt_Service_1 = require("../services/jwt.Service");
exports.authController = {
    register: async (req, res) => {
        const { firstName, lastName, phone, birth, email, password } = req.body;
        try {
            const userAlreadyExists = await user_Service_1.userService.findByEmail(email);
            if (userAlreadyExists) {
                throw new Error('Este e-mail já está cadastrado.');
            }
            const user = await user_Service_1.userService.create({
                firstName,
                lastName,
                phone,
                birth,
                email,
                password,
                role: 'user'
            });
            return res.status(201).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email e senha são obrigatórios"
            });
        }
        try {
            const user = await user_Service_1.userService.findByEmail(email);
            if (!user) {
                return res.status(404).json({ message: 'E-mail não registrado' });
            }
            user.checKPassword(password, (err, isSame) => {
                if (err) {
                    return res.status(400).json({ message: err.message });
                }
                if (!isSame) {
                    return res.status(401).json({ message: 'Senha incorreta' });
                }
                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    email: user.email,
                };
                const token = jwt_Service_1.jwtService.signToken(payload, '30d');
                return res.status(200).json(Object.assign(Object.assign({ authenticated: true }, payload), { token }));
            });
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=auth.controller.js.map