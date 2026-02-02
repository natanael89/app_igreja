"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const user_Service_1 = require("../services/user.Service");
exports.usersController = {
    watching: async (req, res) => {
        const { id } = req.user;
        try {
            const watching = await user_Service_1.userService.getKeepWatchingList(id);
            return res.json(watching);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    show: async (req, res) => {
        const currentUser = req.user;
        try {
            return res.json(currentUser);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    update: async (req, res) => {
        const { id } = req.user;
        const { firstName, lastName, phone, email, birth } = req.body;
        try {
            const updatedUser = await user_Service_1.userService.update(id, {
                firstName,
                lastName,
                phone,
                email,
                birth
            });
            return res.json(updatedUser);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    updatePassword: async (req, res) => {
        const user = req.user;
        const { currentPassword, newPassword } = req.body;
        if (!user) {
            return res.status(401).json({ message: 'Não autorizado!' });
        }
        try {
            user.checKPassword(currentPassword, async (error, isSame) => {
                if (error) {
                    return res.status(400).json({ message: error.message });
                }
                if (!isSame) {
                    return res.status(204).json({ message: 'Senha incorreta' });
                }
                await user_Service_1.userService.updatePasseord(user.id, newPassword);
                return res.status(204).send;
            });
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=users.controller.js.map