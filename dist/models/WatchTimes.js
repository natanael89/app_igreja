"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchTimes = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class WatchTimes extends sequelize_1.Model {
}
exports.WatchTimes = WatchTimes;
WatchTimes.init({
    userId: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    videoId: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'videos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    seconds: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    sequelize: database_1.database,
    tableName: "watch_times",
    timestamps: false
});
//# sourceMappingURL=WatchTimes.js.map