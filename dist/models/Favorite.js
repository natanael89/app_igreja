"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Favorite extends sequelize_1.Model {
}
exports.Favorite = Favorite;
Favorite.init({
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
            model: 'daily_posts',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}, {
    sequelize: database_1.database,
    tableName: 'favorites',
    underscored: true,
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'daily_post_id']
        }
    ]
});
//# sourceMappingURL=Favorite.js.map