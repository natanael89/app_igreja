import { ResourceOptions, FeatureType } from "adminjs";
import uploadFileFeature from "@adminjs/upload";
import path from "path";

export const GalleryImageResourceoptions: ResourceOptions = {
    navigation: "Midia da Igreja",
    editProperties: [
        "gallery_id",
        "position",
        "uploadImage",
    ],
    filterProperties: [
        "gallery_id",
        "position",
        "createdAt"
    ],
    listProperties: [
        "id",
        "gallery_id",
        "position",
        "image_url",
        "createdAt",
    ],
    showProperties: [
        "id",
        "gallery_id",
        "position",
        "image_url",
        "createdAt",
    ]
}

export const GalleryImageResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "../../../uploads"),
            },
        },
        properties: {
            key: "image_url",
            file: "uploadImage",
            mimeType: 'image/jpeg|image/png|image/gif|image/webp',
        },
        uploadPath: (record, filename) =>
            `galleries/${record.get("gallery_id")}/images/${filename}`,

    })
]