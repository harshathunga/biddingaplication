import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ferchproductbyidapi } from "../Api/Productsapi";
import Loader from "../Components/Loader";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { placeBidapi } from "../Api/Bidsapi.js";
function Check() {
  const { id } = useParams();
  const [products, setproducts] = useState(null);
  const [bidAmount, setBidAmount] = useState(0);
  const [loading, setloading] = useState(true);
  const [bids, setbids] = useState([]);
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidLoading, setBidLoading] = useState(false);
  const navigate = useNavigate();

  const handleBidSubmit = async () => {
    // e.preventDefault();
    setBidLoading(true);
    const highbid = products.bids?.[0]?.bidAmount || products.startingPrice;
    console.log("Submitting bid:", bidAmount, id, highbid);
    setBidLoading(false);
    const result = await placeBidapi(id, bidAmount, highbid);

    if (result.unauthorized) {
      alert(result.message);
      navigate("/login");
      return;
    }
    const results = await ferchproductbyidapi(id);
    setproducts(results.res?.data);
    alert(result.message);
    setloading(false);
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await ferchproductbyidapi(id);
        if (result.unauthorized) {
          alert(result.message);
          navigate("/login");
          return;
        }
        console.log("this is result", result.res?.data);
        setproducts(result.res?.data);
        setbids(result.res?.data.bids || []);

        setloading(false);
        // alert(result.message);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchdata();
  }, [id]);

  //   console.log("this is products", products);
  //   console.log("this is bids", bids[0].user);
  if (loading) return <Loader></Loader>;

  if (products.length === 0) {
    return <p className="text-center mt-10">No products found.</p>;
  }
  return (
    <div>
      <Navbar>
        {/* <Link className="mx-3 p-3 hover:py-5 focus:outline-2 ">
          Add Products
        </Link> */}
        <Link className="mx-3 p-3 hover:py-5 focus:outline-2 ">Logout</Link>
      </Navbar>
      {/* <h1>dsbjdbfs</h1>
      <p>Product ID: {id}</p> */}

      {showBidModal && (
        <div className="  flex-col fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div>
            {" "}
            <button
              onClick={() => setShowBidModal(false)}
              className="text-white text-xl py-5 float-end top-11"
            >
              x
            </button>{" "}
          </div>

          <div>
            <p className="text-white mb-3">
              Current highest: $
              {products.bids?.[0]?.bidAmount || products.startingPrice}
            </p>

            <input
              type="number"
              step="0.01"
              placeholder="Enter your bid"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full mb-3"
              required
            />

            <button
              onClick={() => handleBidSubmit()}
              //   type="submit"
              disabled={bidLoading}
              className="bg-blue-600 text-white w-full py-2 rounded"
            >
              {bidLoading ? "Placing..." : "Submit Bid"}
            </button>
          </div>
        </div>
      )}

      <div className=" flex flex-col items-center justify-center">
        <div
          key={products.id}
          className=" flex  items-center justify-center w-[900px] bg-blue-200 border border-black rounded-2xl py-6"
        >
          <div className="bg-blue-300 mr-9 " id="image">
            <img src={products.imageUrl} alt={products.name}></img>
          </div>
          <div id="content" className="flex flex-col ">
            <div className="flex justify-between ">
              <div className="flex justify-end ">
                <h1>{products.name}</h1>
              </div>
              <div className="flex justify-end ">
                <h1>${products.startingPrice}</h1>
              </div>
            </div>
            <div className="py-6">
              <p>{products.description}</p>
            </div>
            <div>
              {/* to={`/placebid/${products.id}`} */}
              {/* <Link > */}
              <button
                onClick={() => setShowBidModal(true)}
                className=" bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Place Bid
              </button>
              {/* </Link> */}
              {/* this delete button only should work when the user is the owner for this we need the local storage we can do token expire thsi expire */}
              {/* <button className=" w-auto p-2 mx-2 my-1 border border-black rounded rounded-2xl">
                delete
              </button> */}
            </div>
          </div>

          {/* <h1>{product.name}</h1> */}
          {/* <div>
                    <p>{product.description}</p>
                  </div> */}
        </div>

        <div>
          {bids.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2">Bids:</h2>
              <ul>
                {bids.map((bid) => (
                  <li key={bid.id} className="mb-1">
                    <strong></strong> ${bid.bidAmount} {bid.user.username}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Check;
