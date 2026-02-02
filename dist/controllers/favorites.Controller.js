"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesController = void 0;
const favorite_Service_1 = require("../services/favorite.Service");
exports.favoritesController = {
    save: async (req, res) => {
        const userId = req.user.id;
        const { dailyPosId } = req.body;
        try {
            const favorite = await favorite_Service_1.favoriteService.create(userId, dailyPosId);
            return res.status(201).json(favorite);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    index: async (req, res) => {
        const userId = req.user.id;
        try {
            const favorites = await favorite_Service_1.favoriteService.findByUserId(userId);
            return res.json(favorites);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    delete: async (req, res) => {
        const userId = req.user.id;
        const dailyPosId = Number(req.params.id);
        try {
            await favorite_Service_1.favoriteService.delete(userId, dailyPosId);
            return res.status(204).json();
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=favorites.Controller.js.map