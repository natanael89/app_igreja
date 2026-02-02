"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    birth: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    },
    email: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    role: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'user',
        validate: {
            isIn: [['admin', 'user']]
        }
    },
}, {
    sequelize: database_1.database,
    tableName: 'users',
    timestamps: true,
    underscored: true,
    hooks: {
        beforeSave: async (user) => {
            if (user.isNewRecord || user.changed('password')) {
                user.password = await bcryptjs_1.default.hash(user.password.toString(), 10);
            }
        }
    }
});
User.prototype.checKPassword = function (password, callbackfn) {
    bcryptjs_1.default.compare(password, this.password, (err, isSame) => {
        if (err) {
            return callbackfn(err, false);
        }
        else {
            callbackfn(err, isSame);
        }
    });
};
//# sourceMappingURL=User.js.map