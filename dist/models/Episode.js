"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Episode = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
class Episode extends sequelize_1.Model {
}
exports.Episode = Episode;
Episode.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    synopsis: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    order: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    video_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    seconds_long: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    course_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    },
}, {
    sequelize: database_1.database,
    tableName: "episodes",
    timestamps: true,
    underscored: true,
});
//# sourceMappingURL=Episode.js.map