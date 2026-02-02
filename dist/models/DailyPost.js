"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyPost = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class DailyPost extends sequelize_1.Model {
}
exports.DailyPost = DailyPost;
DailyPost.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    content: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    featured: {
        defaultValue: false,
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    category_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: "categories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
    },
}, {
    sequelize: database_1.database,
    tableName: "daily_posts",
    timestamps: true,
    underscored: true,
});
//# sourceMappingURL=DailyPost.js.map