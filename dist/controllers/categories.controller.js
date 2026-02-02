"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesController = void 0;
const category_Service_1 = require("../services/category.Service");
const getPaginationParams_1 = require("../helpers/getPaginationParams");
exports.categoriesController = {
    index: async (req, res) => {
        const [page, perPage] = (0, getPaginationParams_1.gatPaginationParams)(req.query);
        try {
            const paginatedCategories = await category_Service_1.categoryService.findAllPaginated(page, perPage);
            return res.json(paginatedCategories);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ massage: error.message });
            }
        }
    },
    show: async (req, res) => {
        const id = req.params.id;
        try {
            const category = await category_Service_1.categoryService.findByIdWithCourses(id);
            return res.json(category);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
};
//# sourceMappingURL=categories.controller.js.map