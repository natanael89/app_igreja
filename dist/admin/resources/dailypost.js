"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyPostResourceFeatures = exports.DailyPostResourceOptions = void 0;
const path_1 = __importDefault(require("path"));
const upload_1 = __importDefault(require("@adminjs/upload"));
exports.DailyPostResourceOptions = {
    navigation: "Midia da Igreja",
    editProperties: [
        "title",
        "content",
        "uploadImage",
        "featured",
        "category_id",
    ],
    properties: {
        content: {
            type: "textarea",
            props: {
                rows: 8,
            }
        }
    },
    filterProperties: [
        "title",
        "featured",
        "createdAt",
    ],
    showProperties: [
        "id",
        "title",
        "content",
        "image_url",
        "featured",
        "category_id",
        "createdAt",
    ]
};
exports.DailyPostResourceFeatures = [
    (0, upload_1.default)({
        provider: {
            local: {
                bucket: path_1.default.join(__dirname, "..", "..", "..", "uploads"),
            },
        },
        properties: {
            key: "image_url",
            file: "uploadImage",
        },
        uploadPath: (record, filename) => `daily-posts/${record.get("id")}/${filename}`,
    })
];
//# sourceMappingURL=dailypost.js.map