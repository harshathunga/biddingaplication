import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const products = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    startingPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
},
    {
        timestamps: true,
        tableName: "products",
    }
);

export default products;