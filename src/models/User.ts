import { database } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcryptjs"
import { Episode } from "./Episode";
import { Video } from "./Video";

type CheckPasswordCallback = (err?: Error, isSame?: boolean) => void

interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    birth?: Date;
    email: string;
    password: string;
    role: string;
    created_at?: Date;
    updated_at?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'role'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    checKPassword!: (password: string, callbackfn: CheckPasswordCallback) => void


    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public phone!: string;
    public birth!: Date;
    public email!: string;
    public password!: string;
    public role!: string;
    public created_at?: Date;
    public updated_at?: Date;
    Episodes?: Episode[];
    watchedVideos?: Video[];

}

User.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        birth: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        role: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'user'
        },
    },
    {
        sequelize: database,
        tableName: 'users',
        timestamps: true,
        underscored: true,
        hooks: {
            beforeSave: async (user: User) => {
                if(user.isNewRecord || user.changed('password')){
                    user.password = await bcrypt.hash(user.password.toString(), 10)
                }
            }
        }
    }
)

User.prototype.checKPassword = function (password: string, callbackfn: CheckPasswordCallback) {
    bcrypt.compare(password, this.password, (err: any, isSame: any) => {
        if (err) {
            return callbackfn(err, false);
        } else {
            callbackfn(err, isSame);
        }
        
    });
}