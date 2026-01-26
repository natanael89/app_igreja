import { DataTypes, Model, Optional } from "sequelize";
import { database } from "../database";

interface CategoryAttributes {
    id: number
    name: string
    position: number
    created_at?: Date
    updated_at?: Date
}

interface CategoryCreationAttibutes extends Optional<CategoryAttributes, "id" | "position" | "created_at" | "updated_at"> {}

export class Category extends Model<CategoryAttributes, CategoryCreationAttibutes> implements CategoryAttributes {
    public id!: number
    public name!: string
    public position!: number
    public readonly created_at!: Date
    public readonly updated_at!: Date
}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
      
    },{
        sequelize: database,
        tableName: "categories",
        timestamps: true,
        underscored: true,
    }
)