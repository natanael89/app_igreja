import { ResourceOptions, FeatureType} from "adminjs";
import path from "path";
import uploadFileFeature from "@adminjs/upload";


export const DailyPostResourceOptions: ResourceOptions = {
    navigation: "Midia da Igreja",
    editProperties: [
        "title",
        "content",
        "uploadImage",
        "featured",
        "category_id",
    ],
    properties:{
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
}

export const DailyPostResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "..", "..", "..", "uploads"),
            },
        },
        properties: {
            key: "image_url",
            file: "uploadImage",
        },
        uploadPath: (record, filename) => `daily-posts/${record.get("id")}/${filename}`,
    })
]