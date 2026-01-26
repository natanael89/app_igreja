import { Model, DataTypes, Optional } from "sequelize";
import { database } from "../database";


export interface GalleryAttributes {
    id: number;
    title: string;
    description?: string;
    cover_url?: string;
    category_id: number;
    createdAt?: Date,
    updatedAt?: Date, 
}

export interface GalleryCreationAttributes extends Optional<GalleryAttributes, "id" | "cover_url"> {}

export class Gallery extends Model<GalleryAttributes, GalleryCreationAttributes> implements GalleryAttributes {
    public id!: number;
    public title!: string;
    public description?: string;
    public cover_url?: string;
    public category_id!: number;
    public createdAt?: Date;
    public updatedAt?: Date;

}

Gallery.init(
    {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: true,
            type: DataTypes.TEXT
        },
        cover_url:{
            allowNull: true,
            type: DataTypes.STRING
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "categories", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "RESTRICT",
        }

    },
    {
        sequelize: database,
        tableName: "galleries",
        timestamps: true,
        underscored: true,
    }
)