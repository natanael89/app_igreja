import { ResourceOptions, FeatureType } from "adminjs";
import path from "path"
import uploadFeature from "@adminjs/upload";


export const EpisodeResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'synopsis', 'course_id', 'order', 'video_url', 'uploadVideo','seconds_long'],
    filterProperties: ['name', 'synopsis', 'course_id', 'order', 'seconds_long', 'created_at', 'updated_at'],
    listProperties: ['id', 'name', 'synopsis', 'course_id', 'order'],
    showProperties: ['id', 'name', 'synopsis', 'course_id', 'order', 'video_url', 'seconds_long', 'created_at', 'updated_at']
}

export const EpisodeResourceFeatures: FeatureType[] = [
    uploadFeature({
        provider: {
            local: {
                bucket: path.join(__dirname, '..', '..', '..', 'uploads')
            }
        },
        properties: {
            key: 'video_url',
            file: 'uploadVideo'
        },
        uploadPath: (record, filename) => `videos/course-${record.get('course_id')}/${filename}`
    })
]