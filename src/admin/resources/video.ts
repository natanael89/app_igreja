import { ResourceOptions, FeatureType} from "adminjs";
import path from "path";
import uploadFileFeature from "@adminjs/upload";
// import { generateVideoThumbnail } from "../../utils/upload/generateVideoThumbnail";


export const VideoResourceOptions: ResourceOptions = {
    navigation: "Midia da Igreja",
    editProperties: [
        "title",
        "description",
        "uploadVideo",
        "uploadThumbnail",
        "featured",
        "category_id",
    ],
    properties:{
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
}

export const VideoResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "../../../uploads"),
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
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "../../../uploads"),
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
]