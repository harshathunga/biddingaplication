import users from "./UsersModel.js";
import products from "./ProductsModel.js";
import bids from "./BidsModel.js";


users.hasMany(bids);// this is one to many
bids.belongsTo(users);// this is many to one
products.hasMany(bids);
bids.belongsTo(products);

export { users, products, bids };