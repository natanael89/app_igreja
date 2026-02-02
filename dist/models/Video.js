"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Video extends sequelize_1.Model {
}
exports.Video = Video;
Video.init({
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
    description: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    videoUrl: {
        type: sequelize_1.DataTypes.STRING,
    },
    thumbnailUrl: {
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
    order: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    views: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    uploadVideo: {
        type: sequelize_1.DataTypes.VIRTUAL,
    },
    uploadThumbnail: {
        type: sequelize_1.DataTypes.VIRTUAL,
    }
}, {
    sequelize: database_1.database,
    tableName: "videos",
    timestamps: true,
    underscored: true,
});
//# sourceMappingURL=Video.js.map