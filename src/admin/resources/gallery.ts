import { ResourceOptions, FeatureType, ActionContext } from "adminjs";
import uploadFileFeature from "@adminjs/upload";
import path from "path";


export const GalleryResourceoptions: ResourceOptions = {
    navigation: "Midia da Igreja",
    editProperties: [
        "title",
        "description",
        "uploadCover",
        "category_id"
    ],
    listProperties: ["id", "title", "createdAt"],
    showProperties: [
        "id",
        "title",
        "description",
        "cover_url",
        "category_id",
        "createdAt",
    ],
    actions: {
        show: {
            isVisible: true,
        }
    }

}

export const GalleryResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, "../../../uploads"),
            },
        },
        properties: {
            key: "cover_url",
            file: "uploadCover",
            filePath: "coverFilePath",
            filesToDelete: "coverFilesToDelete",
        },
        uploadPath: (record, filename) => 
            `galleries/${record.get("id")}/cover-${filename}`,
    }),

]