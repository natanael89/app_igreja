"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchTimes = exports.Favorite = exports.Like = exports.User = exports.Video = exports.DailyPost = exports.Category = void 0;
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
// ====================
// RELACIONAMENTOS
// ====================
// Category -> DailyPost
Category_1.Category.hasMany(DailyPost_1.DailyPost, { foreignKey: 'category_id' });
DailyPost_1.DailyPost.belongsTo(Category_1.Category, { foreignKey: 'category_id' });
// Likes
DailyPost_1.DailyPost.belongsToMany(User_1.User, {
    through: Like_1.Like,
    foreignKey: 'daily_post_id',
    as: 'likedUsers'
});
User_1.User.belongsToMany(DailyPost_1.DailyPost, {
    through: Like_1.Like,
    foreignKey: 'user_id',
    as: 'likedDailyPosts'
});
// Favorites
DailyPost_1.DailyPost.belongsToMany(User_1.User, {
    through: Favorite_1.Favorite,
    foreignKey: 'daily_post_id',
    as: 'favoritedUsers'
});
User_1.User.belongsToMany(DailyPost_1.DailyPost, {
    through: Favorite_1.Favorite,
    foreignKey: 'user_id',
    as: 'favoriteDailyPosts'
});
WatchTimes_1.WatchTimes.belongsTo(Video_1.Video, { foreignKey: 'user_id' });
WatchTimes_1.WatchTimes.belongsTo(User_1.User, {
    foreignKey: 'user_id'
});
//# sourceMappingURL=index.js.map