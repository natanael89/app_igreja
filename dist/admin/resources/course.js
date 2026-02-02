"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResourceFeatures = exports.CourseResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
exports.CourseResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'category_id'],
    filterProperties: ['name', 'featured', 'created_at', 'updated_at'],
    listProperties: ['id', 'name', 'featured', 'category_id', 'created_at', 'updated_at'],
    showProperties: ['id', 'name', 'synopsis', 'thumbnail_url', 'featured', 'category_id', 'created_at', 'updated_at']
};
exports.CourseResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, '../../../uploads')
            }
        },
        properties: {
            key: 'thumbnail_url',
            file: 'uploadThumbnail'
        },
        uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`
    })
];
//# sourceMappingURL=course.js.map