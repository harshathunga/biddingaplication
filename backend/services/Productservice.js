import bids from "../Models.js/BidsModel.js";
import products from "../Models.js/ProductsModel.js";

import users from "../Models.js/UsersModel.js";

export const postProducts = async ({
  user_id,
  name,
  description,
  category,
  startingPrice,
  imageUrl,
  endTime,
}) => {
  try {
    console.log("Product details:", {
      user_id,
      name,
      description,
      category,
      startingPrice,
      imageUrl,
      endTime,
    });
    const product = await products.create({
      user_id,
      name,
      description,
      category,
      startingPrice,
      imageUrl,
      endTime
    });

    return { status: 200, message: "Product added successfully" };
  } catch (error) {
    console.error("Error adding product:", error);
    return { status: 500, message: "Internal server error" };
  }

 
};

export const fetcheveryoneProduct = async ()=>{
   try{
        const fetchedallProducts = await products.findAll( );
        // console.log("Fetched products:", fetchedProducts);
        return { status: 200, message: "Products fetched successfully", product: fetchedallProducts };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { status: 500, message: "Internal server error" };
    }
}

export const getProducts = async ({user_id}) => { 
    try{
        const fetchedProducts = await products.findAll({ where: { user_id: user_id } });
        console.log("Fetched products:", fetchedProducts);
        return { status: 200, message: "Products fetched successfully", product: fetchedProducts };
    } catch (error) {
        console.error("Error fetching products:", error);
        return { status: 500, message: "Internal server error" };
    }
}

export const getProductById = async ({id}) => {

    console.log("Fetching product by ID:", id);

    try{
        const product = await products.findOne({ where: { id: id }, include:[ {
            model: bids,
            // as: "bids",
            include: [{ model: users,
                //  as: "users",
                 attributes: ["id", "username" ]}],
        }] });
        return { status: 200, message: "Product fetched successfully", product };
    } catch (error) { console.error("Error fetching product by ID:", error);}
    return { status: 500, message: "Internal server error" };

 }

export const deleteProductById = async ({id}) => {

    console.log("Deleting product by ID:", id);

    try{
        const product = await products.destroy({ where: { id: id } });
        return { status: 200, message: "Product deleted successfully", product };
    } catch (error) { console.error("Error deleting product by ID:", error);}
}