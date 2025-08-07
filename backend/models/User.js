import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db.js';

export const usuario = db.define('usuario', { 
    email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
    },
    password: {
    type: DataTypes.STRING,
    allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'usuario'
});