"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoController = void 0;
const video_Service_1 = require("../services/video.Service");
exports.videoController = {
    index: async (req, res) => {
        try {
            const videos = await video_Service_1.videoService.getLatestVideos();
            return res.json(videos);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    show: async (req, res) => {
        const id = req.params.id;
        try {
            const video = await video_Service_1.videoService.findById(id);
            return res.json(video);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=video.controller.js.map