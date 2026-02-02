"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeResourceFeatures = exports.EpisodeResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
exports.EpisodeResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'course_id', 'order', 'video_url', 'uploadVideo', 'seconds_long'],
    filterProperties: ['name', 'synopsis', 'course_id', 'order', 'seconds_long', 'created_at', 'updated_at'],
    listProperties: ['id', 'name', 'synopsis', 'course_id', 'order'],
    showProperties: ['id', 'name', 'synopsis', 'course_id', 'order', 'video_url', 'seconds_long', 'created_at', 'updated_at']
};
exports.EpisodeResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, '..', '..', '..', 'uploads')
            }
        },
        properties: {
            key: 'video_url',
            file: 'uploadVideo'
        },
        uploadPath: (record, filename) => `videos/course-${record.get('course_id')}/${filename}`
    })
];
//# sourceMappingURL=episode.js.map