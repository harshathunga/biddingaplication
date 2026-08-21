import users from "./UsersModel.js";
import products from "./ProductsModel.js";
import bids from "./BidsModel.js";


users.hasMany(bids, { foreignKey: "userId" });// this is one to many
bids.belongsTo(users, { foreignKey: "userId" });// this is many to one
products.hasMany(bids, { foreignKey: "productId" });
bids.belongsTo(products, { foreignKey: "productId" });

export { users, products, bids };