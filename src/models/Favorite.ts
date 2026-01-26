import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import { DailyPost } from "./DailyPost";
import { User } from "./User";


export interface FavoriteAttributes {
    user_id: number;
    daily_post_id: number;
}


export class Favorite extends Model<FavoriteAttributes, Omit<FavoriteAttributes, 'created_at' | 'updated_at'>> implements FavoriteAttributes {
    public user_id!: number;
    public daily_post_id!: number;

    public dailyPost?: DailyPost
    public User?: User
  
} 

Favorite.init(
    {
        user_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
            references: {
                model: 'daily_posts',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
       
    },
    {
        sequelize: database,
        tableName: 'favorites',
        underscored: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['user_id', 'daily_post_id']
            }
        ]
    }
)