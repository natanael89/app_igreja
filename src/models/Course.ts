import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { database } from "../database";


export interface CourseAttributes {
    id: number
    name: string
    synopsis: string
    thumbnail_url?: string
    featured?: boolean
    category_id: number
    created_at?: Date
    updated_at?: Date
}

interface CourseCreationAttributes extends Optional<CourseAttributes, "id" | "thumbnail_url" | "featured"> {}

export class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
    public id!:number;
    public name!: string;
    public synopsis!: string;
    public thumbailUrl?: string;
    public featured!: boolean;
    public category_id!: number;

    public readonly created_at!: Date
    public readonly updated_at!: Date
}

Course.init(
  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    synopsis: {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    thumbnail_url: {
        type: DataTypes.STRING,
    },
    featured: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
    },
    category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
},
{
    sequelize: database,
    tableName: "courses",
    timestamps: true,
    underscored: true,
})