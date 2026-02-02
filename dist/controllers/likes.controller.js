"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likesController = void 0;
const like_Service_1 = require("../services/like.Service");
exports.likesController = {
    save: async (req, res) => {
        const userId = req.user.id;
        const { dailyPostId } = req.body;
        try {
            const like = await like_Service_1.likeService.create(userId, dailyPostId);
            return res.status(201).json(like);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    delete: async (req, res) => {
        const userId = req.user.id;
        const dailyPostId = req.params.id;
        try {
            await like_Service_1.likeService.delete(userId, Number(dailyPostId));
            return res.status(204).send();
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=likes.controller.js.map