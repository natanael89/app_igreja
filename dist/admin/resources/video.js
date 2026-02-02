"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoResourceFeatures = exports.VideoResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
// import { generateVideoThumbnail } from "../../utils/upload/generateVideoThumbnail";
exports.VideoResourceOptions = {
    navigation: "Midia da Igreja",
    editProperties: [
        "title",
        "description",
        "uploadVideo",
        "uploadThumbnail",
        "featured",
        "category_id",
    ],
    properties: {
        description: {
            type: 'textarea',
            props: {
                rows: 8,
            }
        }
    },
    filterProperties: ["title", "featured", "createdAt"],
    listProperties: ["id", "title", "featured", "createdAt"],
    showProperties: [
        "id",
        "title",
        "description",
        "videoUrl",
        "thumbnailUrl",
        "featured",
        "category_id",
        "views",
        "createdAt"
    ],
};
exports.VideoResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, "../../../uploads"),
                opts: { baseUrl: '/uploads' }
            },
        },
        properties: {
            key: "videoUrl",
            file: "uploadVideo",
            filePath: "videoFilePath",
            filesToDelete: "videoFilesToDelete",
        },
        uploadPath: (record, filename) => `videos/video-${record.get("id")}/${filename}`,
    }),
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, "../../../uploads"),
                opts: { baseUrl: '/uploads' }
            },
        },
        properties: {
            key: "thumbnailUrl",
            file: "uploadThumbnail",
            filePath: "thumbnailFilePath",
            filesToDelete: "thumbnailFilesToDelete",
        },
        uploadPath: (record, filename) => `thumbails/video-${record.get("id")}/${filename}`,
    })
];
//# sourceMappingURL=video.js.map