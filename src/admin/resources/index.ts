import { ResourceWithOptions } from "adminjs"
import { Category, DailyPost, Video ,User} from "../../models"
import { CategoryResourceOptions } from "./category"
import { DailyPostResourceOptions, DailyPostResourceFeatures } from "./dailypost"
import { VideoResourceOptions, VideoResourceFeatures } from "./video"
import { UserResourceOptions } from "./user"

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
        resource: Category,
        options: CategoryResourceOptions,
    },
    {
        resource: User,
        options: UserResourceOptions,
    }
]