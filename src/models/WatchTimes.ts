import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

interface WatchTimeAttributes{
    userId: number;
    videoId: number;
    seconds: number;
}

export class WatchTimes extends Model<WatchTimeAttributes> implements WatchTimeAttributes {
    public userId!: number;
    public videoId!: number;
    public seconds!: number;
}

WatchTimes.init(
    {
        userId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: { model: 'users', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        videoId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: { model: 'videos', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        seconds: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: database,
        tableName: "watch_times",
        timestamps: false
    }
)