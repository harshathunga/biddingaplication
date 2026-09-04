const baseUrl = "http://localhost:3002/api";


export const placeBidapi = async (id, bidAmount, highbid) => {

  console.log(`${baseUrl}/placebid/${id}`);
  if (bidAmount <= highbid) {
      return { message: "Bid amount must be higher than the current highest bid", success: false };
  }
  try {
    const res = await fetch(`${baseUrl}/placebid/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bidAmount, id }),
      credentials: "include",
    });
    const results = await res.json();
    
     if (res.status === 401){
        return { success: false, unauthorized: true, message: "Not logged in" };
    }
    if (!res.ok) {
      return { message: results.message || "bid Failed", success: false };
    }
    return { message: results.message || "bid placed successful", success: true, res:results };
  } catch (error) {
    console.error("Error placing bid:", error);
    throw error;
  }
};