import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";
import { WatchTimes } from "./WatchTimes";

export interface VideoAttributes {
    id: number;
    title: string;
    description: string;
    videoUrl?: string;
    thumbnailUrl?: string;
    featured?: boolean;
    category_id: number;
    order?: number;
    views: number;
    createdAt?: Date;
    updatedAt?: Date;
    uploadVideo?: string;
    uploadThumbnail?: string;
}

export interface VideoCreationAttributes extends Optional<VideoAttributes, "id" | "videoUrl" | "thumbnailUrl" | "featured" | "views"> {}

export class Video extends Model<VideoAttributes, VideoCreationAttributes> implements VideoAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public videoUrl?: string;
    public thumbnailUrl?: string;
    public featured?: boolean;
    public category_id!: number;
    public order?: number;
    public views!: number;

    public uploadVideo?: any;
    public uploadThumbnail?: any;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    watchTime?: WatchTimes[];
}

Video.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        videoUrl: {
            type: DataTypes.STRING,
        },
        thumbnailUrl: {
            type: DataTypes.STRING,
        },
        featured: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        category_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: { model: "categories", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        uploadVideo: {
            type: DataTypes.VIRTUAL,
        },
        uploadThumbnail: {
             type: DataTypes.VIRTUAL,
        }
    },
    {
        sequelize: database,
        tableName: "videos",
        timestamps: true,
        underscored: true,
    }
)