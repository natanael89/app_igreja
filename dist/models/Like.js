"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Like extends sequelize_1.Model {
}
exports.Like = Like;
Like.init({
    user_id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    daily_post_id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'courses',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
}, {
    sequelize: database_1.database,
    tableName: 'likes',
    timestamps: true,
    underscored: true,
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'daily_post_id']
        }
    ]
});
//# sourceMappingURL=Like.js.map