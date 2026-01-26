import { Model, DataTypes, Optional } from "sequelize";
import { database } from "../database";

export interface Gallery_ImageAttributes {
    id: number;
    gallery_id: number;
    category_id?: number;
    image_url: string;
    createdAt?: Date;
    updatedAt?: Date;
    position?: number;
}


export interface Gallery_ImageCreationAttributes extends Optional<Gallery_ImageAttributes, "id" | "image_url"> { }

export class Gallery_Image extends Model<Gallery_ImageAttributes, Gallery_ImageCreationAttributes> implements Gallery_ImageAttributes {
    public id!: number;
    public gallery_id!: number;
    public category_id?: number;
    public image_url!: string;
    public createdAt?: Date;
    public updatedAt?: Date;
    public position!: number;
}

Gallery_Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        gallery_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "galleries", key: "id" },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: "categories", key: "id" },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        sequelize: database,
        tableName: "gallery_images",
        timestamps: true,
        underscored: true,
    }
)