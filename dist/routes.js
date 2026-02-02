"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = __importStar(require("express"));
const categories_controller_1 = require("./controllers/categories.controller");
const dailyPost_controller_1 = require("./controllers/dailyPost.controller");
const video_controller_1 = require("./controllers/video.controller");
const favorites_Controller_1 = require("./controllers/favorites.Controller");
const auth_controller_1 = require("./controllers/auth.controller");
const auth_1 = require("./middlewares/auth");
const likes_controller_1 = require("./controllers/likes.controller");
const users_controller_1 = require("./controllers/users.controller");
const router = express.Router();
exports.router = router;
router.post('/auth/register', auth_controller_1.authController.register);
router.post('/auth/login', auth_controller_1.authController.login);
router.get('/categories', auth_1.ensureAuth, categories_controller_1.categoriesController.index);
router.get('/categories/:id', auth_1.ensureAuth, categories_controller_1.categoriesController.show);
router.get('/daily-posts', dailyPost_controller_1.dailyPostController.index);
router.get('/daily-posts/featured', dailyPost_controller_1.dailyPostController.featured);
router.get('/daily-posts/popular', dailyPost_controller_1.dailyPostController.popular);
router.get('/daily-posts/search', dailyPost_controller_1.dailyPostController.search);
router.get('/daily-posts/:id', dailyPost_controller_1.dailyPostController.show);
router.get('/video', auth_1.ensureAuth, video_controller_1.videoController.index);
router.get('/video/info/:id', auth_1.ensureAuth, video_controller_1.videoController.show);
router.get('/video/:id', auth_1.ensureAuth, video_controller_1.videoController.show);
router.get('/favorites', auth_1.ensureAuth, favorites_Controller_1.favoritesController.index);
router.post('/favorites', auth_1.ensureAuth, favorites_Controller_1.favoritesController.save);
router.delete('/favorites/:id', auth_1.ensureAuth, favorites_Controller_1.favoritesController.delete);
router.post('/likes', auth_1.ensureAuth, likes_controller_1.likesController.save);
router.delete('/likes/:id', auth_1.ensureAuth, likes_controller_1.likesController.delete);
router.get('/users/current/watching', auth_1.ensureAuth, users_controller_1.usersController.watching);
router.get('/users/current', auth_1.ensureAuth, users_controller_1.usersController.show);
router.put('/users/current', auth_1.ensureAuth, users_controller_1.usersController.update);
router.put('/users/current/password', auth_1.ensureAuth, users_controller_1.usersController.updatePassword);
//# sourceMappingURL=routes.js.map