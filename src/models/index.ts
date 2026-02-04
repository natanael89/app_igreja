import { Category } from "./Category";
import { DailyPost } from "./DailyPost";
import { Video } from "./Video";
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { User } from "./User";
import { WatchTimes } from "./WatchTimes";


// ====================
// RELACIONAMENTOS
// ====================


// Category -> DailyPost
Category.hasMany(DailyPost, { foreignKey: 'category_id' })
DailyPost.belongsTo(Category, { foreignKey: 'category_id' })

// Likes
DailyPost.belongsToMany(User, {
    through: Like,
    foreignKey: 'daily_post_id',
    as: 'likedUsers'
})

User.belongsToMany(DailyPost, {
    through: Like,
    foreignKey: 'user_id',
    as: 'likedDailyPosts'
})

// Favorites
DailyPost.belongsToMany(User, {
    through: Favorite,
    foreignKey: 'daily_post_id',
    as: 'favoritedUsers'
})

User.belongsToMany(DailyPost, {
    through: Favorite,
    foreignKey: 'user_id',
    as: 'favoriteDailyPosts'
})

WatchTimes.belongsTo(Video, { foreignKey: 'user_id' })

WatchTimes.belongsTo(User, {
    foreignKey: 'user_id'
})

export {
    Category,
    DailyPost,
    Video,
    User,
    Like,
    Favorite,
    WatchTimes
}