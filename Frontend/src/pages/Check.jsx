import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ferchproductbyidapi } from "../Api/Productsapi";
import Loader from "../Components/Loader";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
function Check() {
  const { id } = useParams();
  const [products, setproducts] = useState(null);
  const [loading, setloading] = useState(true);
  const [bids, setbids] = useState([]);
  const navigate = useNavigate();

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
        <Link className="mx-3 p-3 hover:py-5 focus:outline-2 ">
          Add Products
        </Link>
        <Link className="mx-3 p-3 hover:py-5 focus:outline-2 ">Logout</Link>
      </Navbar>
      {/* <h1>dsbjdbfs</h1>
      <p>Product ID: {id}</p> */}

      <div className=" flex flex-col items-center justify-center">
        <div
          key={products.id}
          className=" flex  items-center justify-center w-[900px] bg-blue-200 border border-black rounded rounded-2xl"
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
            <div>
              <p>{products.description}</p>
            </div>
            <div>
              <Link to={`/check/${products.id}`}>
                <button className=" w-auto p-2 border border-black rounded rounded-2xl">
                  check detais
                </button>
              </Link>
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
