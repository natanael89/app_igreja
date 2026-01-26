import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import { DailyPost } from "./DailyPost";
import { User } from "./User";

export interface LikeAttributes {
    user_id: number;
    daily_post_id: number;
    created_at?: Date;
    updated_at?: Date;
}

export class Like extends Model<LikeAttributes, Omit<LikeAttributes, 'creatad_at' | 'updated_at'>> implements LikeAttributes {
    user_id!: number;
    daily_post_id!: number;

    dailyPost?: DailyPost;
    User?: User;
    
}

Like.init(
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
                model: 'courses',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
    
    },
    {
        sequelize: database,
        tableName: 'likes',
        timestamps: true,
        underscored: true,
        indexes:[
            {
                unique: true,
                fields: ['user_id', 'daily_post_id']
            }
        ]
    }
)