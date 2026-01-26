import { ResourceWithOptions } from "adminjs"
import { Category, DailyPost, Video ,User, Gallery } from "../../models"
import { CategoryResourceOptions } from "./category"
import { DailyPostResourceOptions, DailyPostResourceFeatures } from "./dailypost"
import { VideoResourceOptions, VideoResourceFeatures } from "./video"
import { UserResourceOptions } from "./user"
import { GalleryResourceFeatures, GalleryResourceoptions } from "./gallery"
import { Gallery_Image } from "../../models/Gallery_Images"
import { GalleryImageResourceFeatures, GalleryImageResourceoptions } from "./gallery_images"

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: DailyPost,
        options: DailyPostResourceOptions,
        features: DailyPostResourceFeatures,
    },
    {
        resource: Video,
        options: VideoResourceOptions,
        features: VideoResourceFeatures
    },
    {
        resource: Gallery,
        options: GalleryResourceoptions,
        features: GalleryResourceFeatures,
    },{
        resource: Gallery_Image,
        options: GalleryImageResourceoptions,
        features: GalleryImageResourceFeatures,
    },
    {
        resource: Category,
        options: CategoryResourceOptions,
    },
    {
        resource: User,
        options: UserResourceOptions,
    }
]