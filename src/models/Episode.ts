import { database } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import { WatchTimes } from "./WatchTimes";

interface EpisodeAttributes {
    id: number;
    name: string;
    synopsis: string;
    order: number;
    video_url: string;
    seconds_long: number;
    course_id: number;
    created_at?: Date;
    updated_at?: Date;
}

interface EpsodeCreationAttributes extends Optional<EpisodeAttributes, "id" | "video_url" | "seconds_long"> {}

export class Episode extends Model<EpisodeAttributes, EpsodeCreationAttributes> implements EpisodeAttributes {
    public id!: number;
    public name!: string;
    public synopsis!: string;
    public order!: number;
    public video_url!: string;
    public seconds_long!: number;
    public course_id!: number;
    public readonly created_at!: Date;
    public readonly updated_at!: Date;
    watchTime?: WatchTimes[];

}

Episode.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        synopsis: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        order: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        video_url: {
            type: DataTypes.STRING,
        },
        seconds_long: {
            type: DataTypes.INTEGER,
        },
        course_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: { model: 'courses', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'RESTRICT'
        },
    },
    {
        sequelize: database,
        tableName: "episodes",
        timestamps: true,
        underscored: true,
    }
)