import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
dotenv.config();
import cookieParser from "cookie-parser";

// import products from "./Models.js/ProductsModel.js";
// import users from "./Models.js/UsersModel.js";
// import bids from "./Models.js/BidsModel.js";
import { users, products, bids } from "./Models.js/relation.js";
import userRoutes from "./Routes/userRoutes.js"; 
import productRoutes from "./Routes/productRoutes.js";
import bidsRoutes from "./Routes/bidsRoutes.js";

const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

async function testConnection() {
  try {
    await sequelize.authenticate();

    console.log('✅ Successfully connected to the database');
    await sequelize.sync()
    console.log("tables are synced")
    app.listen(process.env.port, () => {
  console.log("Server running on", process.env.port);
});
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error); 
  } 
}

testConnection();

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", bidsRoutes);

// app.listen(process.env.port, () => {
//   console.log("Server running on", process.env.port)});