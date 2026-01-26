import { Category } from "./Category";
import { DailyPost } from "./DailyPost";
import { Video } from "./Video";
import { Favorite } from "./Favorite";
import { Like } from "./Like";
import { User } from "./User";
import { WatchTimes } from "./WatchTimes";
import { Gallery } from "./Gallery";
import { Gallery_Image } from "./Gallery_Images";

/*
    CATEGORY = DAILY POST  
*/

Category.hasMany(DailyPost, {
    as: 'dailyPosts',
    foreignKey: "category_id"
});

DailyPost.belongsTo(Category, {
    as: "categories",
    foreignKey: "category_id"
});

/*
    CATEGORY = VIDEO
*/

Category.hasMany(Video, {
    as: "videos",
    foreignKey: "category_id"
});

Video.belongsTo(Category, {
    as: "categories",
    foreignKey: "category_id"
});



Category.hasMany(Gallery, {
    as: "gallery",
    foreignKey: "category_id"
});

Gallery.belongsTo(Category, {
    as: "category",
    foreignKey: "category_id",
})

Gallery.hasMany(Gallery_Image, {
    as: "gallery_images",
    foreignKey: "gallery_id"
})

Gallery_Image.belongsTo(Gallery, {
    as: "gallery",
    foreignKey: "gallery_id"
})

/*
    DAILY POST = USER (LIKES)
*/
DailyPost.belongsToMany(User, {
    through: Like,
    foreignKey: "daily_post_id",
    otherKey: "user_id",
    as: "likedUsers"
});

User.belongsToMany(DailyPost, {
    through: Like,
    foreignKey: "user_id",
    otherKey: "daily_post_id",
    as: "likedDalyPosts",

});

/* DAILY POST = USER (FAVORITES) */

DailyPost.belongsToMany(User, {
    through: Favorite,
    foreignKey: "daily_post_id",
    otherKey: "user_id",
    as: "favoritedUsers"
});

User.belongsToMany(DailyPost, {
    through: Favorite,
    foreignKey: "user_id",
    otherKey: "daily_post_id",
    as: "favoriteDailyPosts"
});

DailyPost.hasMany(Favorite, {
    as: "favorites",
    foreignKey: "daily_post_id"
});

Favorite.belongsTo(DailyPost, {
    as: "dailyPost",
    foreignKey: "daily_post_id"
});

Favorite.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Favorite, {
    foreignKey: "user_id"
});

/* VIEDO = USER (WATCH TIMES / VIEWS) */
Video.belongsToMany(User, {
    through: WatchTimes,
    as: "viewers",
    foreignKey: "video_id",
    otherKey: "user_id"
});

User.belongsToMany(Video, {
    through: WatchTimes,
    as: "watchedVideos",
    foreignKey: "user_id",
    otherKey: "video_id"
});

Video.hasMany(WatchTimes, {
    as: "videoViews",
    foreignKey: "video_id",
});

WatchTimes.belongsTo(Video, {
    foreignKey: "video_id"
});

WatchTimes.belongsTo(User, {
    foreignKey: "user_id"
})

export {
    Category,
    DailyPost,
    Video,
    Favorite,
    Like,
    User,
    WatchTimes, Gallery, Gallery_Image
};