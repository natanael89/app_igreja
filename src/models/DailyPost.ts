import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

export interface DailyPostAttributes {
    id: number;
    title: string;
    content: string;
    image_url?: string;
    featured?: boolean;
    category_id: number;
    created_at?: Date;
    updated_at?: Date;
}

export interface DailyPostCreationAttributes extends Optional<DailyPostAttributes, "id" | "image_url" | "featured"> {}

export class DailyPost extends Model<DailyPostAttributes, DailyPostCreationAttributes> implements DailyPostAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public image_url?: string;
    public featured!: boolean;
    public category_id!: number;

    public readonly created_at?: Date;
    public readonly updated_at?: Date;
}

DailyPost.init(
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
        content: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
        image_url: {
            type: DataTypes.STRING,
        },
        featured: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },
        category_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: { model: "categories", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        },
    },
    {
        sequelize: database,
        tableName: "daily_posts",
        timestamps: true,
        underscored: true,
    }
)