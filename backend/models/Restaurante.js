import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/db.js';

export const sobrePlatos = db.define('sobrePlatos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    informacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'sobrePlatos'
});

export const razonPlatos = db.define('razonPlatos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    informacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'razonPlatos'
});

export const catalogoPlatos = db.define('catalogoPlatos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_plato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_plato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vegano: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    gluten: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    azucar: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    vegetariano: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    informacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img3: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    slug: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'catalogoPlatos'
});

export const dolar = db.define('dolar', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    precio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
    tableName: 'dolar' // Especifica el nombre exacto de la tabla
});
