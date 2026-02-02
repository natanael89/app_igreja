"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyPostController = void 0;
const dailyPost_Service_1 = require("../services/dailyPost.Service");
const getPaginationParams_1 = require("../helpers/getPaginationParams");
exports.dailyPostController = {
    index: async (req, res) => {
        try {
            const posts = await dailyPost_Service_1.dailyPostService.getLatestPosts();
            return res.json(posts);
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
            const post = await dailyPost_Service_1.dailyPostService.findById(id);
            return res.json(post);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    featured: async (req, res) => {
        try {
            const post = await dailyPost_Service_1.dailyPostService.getRandomFeaturedPosts();
            return res.json(post);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    popular: async (req, res) => {
        try {
            const posts = await dailyPost_Service_1.dailyPostService.getPopularPosts();
            return res.json(posts);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },
    search: async (req, res) => {
        const { name } = req.query;
        const [page, perPage] = (0, getPaginationParams_1.gatPaginationParams)(req.query);
        try {
            const result = await dailyPost_Service_1.dailyPostService.searchByTitle(String(name), page, perPage);
            return res.json(result);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=dailyPost.controller.js.map