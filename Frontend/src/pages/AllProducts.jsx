import React, { useEffect, useState } from "react";
import "../App.css";
import { allProductfetchapi } from "../Api/Productsapi";
import Loader from "../Components/Loader";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function AllProducts() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  console.log("this is the prod", products);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const result = await allProductfetchapi();

        // if (result.unauthorized) {
        //   alert(result.message);
        //   navigate("/");
        //   return;
        // }

        setproducts(result.res?.data);
        console.log("this is result1", result);
        console.log("this is result2", result.res.data);
        setloading(false);
      } catch (error) {
        console.log(error);
        alert(result.message);
      }
      // const result = await myProductfetchapi();
    };
    fetchdata();
  }, []);

  if (loading) return <Loader></Loader>;

  if (products.length === 0) {
    return <p className="text-center mt-10">No products found.</p>;
  }
  return (
    <div>
        <Navbar>
            <Link className="mx-3 p-3 hover:py-5 focus:outline-2 " to='/myproducts'>My Products</Link>
            <Link className="mx-3 p-3 hover:py-5 focus:outline-2" to= '/login'>Login</Link>
        </Navbar>
      <div className=" flex  items-center justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className=" flex  items-center justify-center w-[900px] bg-blue-200 border border-black rounded rounded-2xl"
          >
            <div className="bg-blue-300 mr-9 " id="image">
              <img src={product.imageUrl} alt={product.name}></img>
            </div>
            <div id="content" className="flex flex-col ">
              <div className="flex justify-between ">
                <div className="flex justify-end ">
                  <h1>{product.name}</h1>
                </div>
                <div className="flex justify-end ">
                  <h1>${product.startingPrice}</h1>
                </div>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <div>
                <button className=" w-auto p-2 border border-black rounded rounded-2xl">
                  check detais
                </button>
              </div>
            </div>

            {/* <h1>{product.name}</h1> */}
            {/* <div>
            <p>{product.description}</p>
          </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
