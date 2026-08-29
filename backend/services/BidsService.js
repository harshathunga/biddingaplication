import bids from "../Models.js/BidsModel.js";
import products from "../Models.js/ProductsModel.js";


export const placeBid = async ({ userId, productId, bidAmount }) => {
  try {
    // Step 1: get the product
    const product = await products.findByPk(productId);
    if (!product) {
      return { status: 404, message: "Product not found" };
    }

    // Step 2: check auction hasn't ended
    if (product.endTime && new Date() > new Date(product.endTime)) {
      return { status: 400, message: "Bidding has ended for this product" };
    }

    // Step 3: block seller from bidding on own product
    if (userId === product.user_id) {
      return { status: 400, message: "You cannot bid on your own product" };
    }

    // Step 4: find current highest bid
    const highestBid = await bids.findOne({
      where: { productId },
      order: [["bidAmount", "DESC"]],
    });

    // Step 5: compare against highest bid or startingPrice
    const currentPrice = highestBid ? highestBid.bidAmount : product.startingPrice;
    if (bidAmount <= currentPrice) {
      return { status: 400, message: `Bid must be higher than ${currentPrice}` };
    }

    // Step 6: create the bid
    const newBid = await bids.create({ user_id:userId, productId, bidAmount });
    return { status: 201, message: "Bid placed successfully", bid: newBid };

  } catch (error) {
    console.error("Error placing bid:", error);
    return { status: 500, message: "Internal server error" };
  }
};