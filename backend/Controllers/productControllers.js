import {
  postProducts,
  getProductById,
  getProducts, deleteProductById
} from "../services/Productservice.js";

export const addProducts = async (req, res) => {
  const { name, description, category, startingPrice, imageUrl, endTime } =
    req.body;

  const user_id = req.user.id;

  try {
    if (!name) {
      res.status(400).json({ message: "Name,  required" });
      return;
    }

    if (!startingPrice) {
      res.status(400).json({ message: "Starting Price is required" });
      return;
    }

    await postProducts({
      user_id,
      name,
      description,
      category,
      startingPrice,
      imageUrl,
      endTime,
    });
    return res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fechproducts = async (req, res) => {
  try {
    const user_id = req.user.id;

    console.log("User ID from token:", user_id);
   const result= await getProducts({ user_id });

    res
      .status(200)
      .json({
        message: "Products fetched successfully",
        data:result.product,
      });
    // res.status(200).json({ data:result.product });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchproductbyid = async (req, res) => {

    const { id } = req.params;
    // console.log("Fetching product by ID:", id);

    try{
        const result =  await getProductById({ id });

        res.status(result.status).json({ message: result.message, data: result.product });
    }catch (error) {
        console.log(error);
        res.status(result.status).json({ message: result.message });
    }
    
};

export const deleteproductbyid = async (req, res) => {

    const { id } = req.params;

    try{
        const result = await deleteProductById({ id });
        res.status(result.status).json({ message: result.message });
    } catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}


