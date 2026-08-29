import { placeBid } from '../services/BidsService.js';



export const placeBidController = async (req, res) => {

    const userId= req.user.id;
    const { productId, bidAmount } = req.body;

    console.log("User ID from token:", userId);
    console.log("Product ID:", productId);
    console.log("Bid Amount:", bidAmount);

    const result = await placeBid({ userId, productId, bidAmount });

    res.status(result.status).json({ message: result.message, bid: result.bid });
}