import users from "./UsersModel.js";
import products from "./ProductsModel.js";
import bids from "./BidsModel.js";


users.hasMany(bids, { foreignKey: "user_id" });
bids.belongsTo(users, { foreignKey: "user_id" });

products.hasMany(bids, { foreignKey: "productId" });
bids.belongsTo(products, { foreignKey: "productId" });

users.hasMany(products, { foreignKey: "user_id" });
products.belongsTo(users, { foreignKey: "user_id" });

export { users, products, bids };