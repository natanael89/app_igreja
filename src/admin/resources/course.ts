import { ResourceOptions, FeatureType } from "adminjs";
import path from "path";
import uploadFileFeature from "@adminjs/upload";

export const CourseResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'uploadThumbnail', 'featured', 'category_id'],
    filterProperties: ['name','featured','created_at', 'updated_at'],
    listProperties: ['id', 'name', 'featured', 'category_id','created_at', 'updated_at' ],
    showProperties: ['id', 'name', 'synopsis','thumbnail_url', 'featured','category_id', 'created_at', 'updated_at']
}

export const CourseResourceFeatures: FeatureType[] = [
    uploadFileFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, '../../../uploads')
            }
        },
        properties: {
            key: 'thumbnail_url',
            file: 'uploadThumbnail'
        },
        uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`
    })
]