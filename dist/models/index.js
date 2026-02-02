"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchTimes = exports.User = exports.Like = exports.Favorite = exports.Video = exports.DailyPost = exports.Category = void 0;
const Category_1 = require("./Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return Category_1.Category; } });
const DailyPost_1 = require("./DailyPost");
Object.defineProperty(exports, "DailyPost", { enumerable: true, get: function () { return DailyPost_1.DailyPost; } });
const Video_1 = require("./Video");
Object.defineProperty(exports, "Video", { enumerable: true, get: function () { return Video_1.Video; } });
const Favorite_1 = require("./Favorite");
Object.defineProperty(exports, "Favorite", { enumerable: true, get: function () { return Favorite_1.Favorite; } });
const Like_1 = require("./Like");
Object.defineProperty(exports, "Like", { enumerable: true, get: function () { return Like_1.Like; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const WatchTimes_1 = require("./WatchTimes");
Object.defineProperty(exports, "WatchTimes", { enumerable: true, get: function () { return WatchTimes_1.WatchTimes; } });
/*
    CATEGORY = DAILY POST
*/
Category_1.Category.hasMany(DailyPost_1.DailyPost, {
    as: 'dailyPosts',
    foreignKey: "category_id"
});
DailyPost_1.DailyPost.belongsTo(Category_1.Category, {
    as: "categories",
    foreignKey: "category_id"
});
/*
    CATEGORY = VIDEO
*/
Category_1.Category.hasMany(Video_1.Video, {
    as: "videos",
    foreignKey: "category_id"
});
Video_1.Video.belongsTo(Category_1.Category, {
    as: "categories",
    foreignKey: "category_id"
});
/*
    DAILY POST = USER (LIKES)
*/
DailyPost_1.DailyPost.belongsToMany(User_1.User, {
    through: Like_1.Like,
    foreignKey: "daily_post_id",
    otherKey: "user_id",
    as: "likedUsers"
});
User_1.User.belongsToMany(DailyPost_1.DailyPost, {
    through: Like_1.Like,
    foreignKey: "user_id",
    otherKey: "daily_post_id",
    as: "likedDalyPosts",
});
/* DAILY POST = USER (FAVORITES) */
DailyPost_1.DailyPost.belongsToMany(User_1.User, {
    through: Favorite_1.Favorite,
    foreignKey: "daily_post_id",
    otherKey: "user_id",
    as: "favoritedUsers"
});
User_1.User.belongsToMany(DailyPost_1.DailyPost, {
    through: Favorite_1.Favorite,
    foreignKey: "user_id",
    otherKey: "daily_post_id",
    as: "favoriteDailyPosts"
});
DailyPost_1.DailyPost.hasMany(Favorite_1.Favorite, {
    as: "favorites",
    foreignKey: "daily_post_id"
});
Favorite_1.Favorite.belongsTo(DailyPost_1.DailyPost, {
    as: "dailyPost",
    foreignKey: "daily_post_id"
});
Favorite_1.Favorite.belongsTo(User_1.User, {
    foreignKey: "user_id",
});
User_1.User.hasMany(Favorite_1.Favorite, {
    foreignKey: "user_id"
});
/* VIEDO = USER (WATCH TIMES / VIEWS) */
Video_1.Video.belongsToMany(User_1.User, {
    through: WatchTimes_1.WatchTimes,
    as: "viewers",
    foreignKey: "video_id",
    otherKey: "user_id"
});
User_1.User.belongsToMany(Video_1.Video, {
    through: WatchTimes_1.WatchTimes,
    as: "watchedVideos",
    foreignKey: "user_id",
    otherKey: "video_id"
});
Video_1.Video.hasMany(WatchTimes_1.WatchTimes, {
    as: "videoViews",
    foreignKey: "video_id",
});
WatchTimes_1.WatchTimes.belongsTo(Video_1.Video, {
    foreignKey: "video_id"
});
WatchTimes_1.WatchTimes.belongsTo(User_1.User, {
    foreignKey: "user_id"
});
//# sourceMappingURL=index.js.map