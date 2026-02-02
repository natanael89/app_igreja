"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Course extends sequelize_1.Model {
}
exports.Course = Course;
Course.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    synopsis: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    thumbnail_url: {
        type: sequelize_1.DataTypes.STRING,
    },
    featured: {
        defaultValue: false,
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    category_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
}, {
    sequelize: database_1.database,
    tableName: "courses",
    timestamps: true,
    underscored: true,
});
//# sourceMappingURL=Course.js.map