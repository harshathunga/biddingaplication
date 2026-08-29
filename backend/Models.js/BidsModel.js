import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const bids = sequelize.define("bids", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bidAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "products",
            key: "id",
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },  
},
    {
        timestamps: true,
        tableName: "bids",
    }
);

export default bids;