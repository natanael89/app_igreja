"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUploadDir = ensureUploadDir;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function ensureUploadDir() {
    const uploadPath = path_1.default.resolve("uploads");
    if (!fs_1.default.existsSync(uploadPath)) {
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
    }
}
//# sourceMappingURL=ensureUploadDir.js.map