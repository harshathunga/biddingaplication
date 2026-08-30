import React, { useEffect, useState } from "react";
import "../App.css";
import { Productfetchapi } from "../Api/Productsapi";
import Loader from "../Components/Loader";
function Products() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  console.log(products);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await Productfetchapi();
      setproducts(result.res?.data);
      console.log("this is result", result.res.data);
      setloading(false);
    };
    fetchdata();
  }, []);

  if (loading) return <Loader></Loader>;

  if (products.length === 0) {
    return <p className="text-center mt-10">No products found.</p>;
  }
  return (
    <div className=" flex flex-col items-center justify-center">
      hi
      {products.map((product) => (
        <div
          key={product.id}
          className=" flex flex-col items-center justify-center w-[900px] bg-blue-200 border border-black"
        >
            <div className="flex  justify-between">
                <h1>{product.name}</h1>
                <h1>${product.startingPrice}</h1>

            </div>
          {/* <h1>{product.name}</h1> */}
          <div>
            <p>{product.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Products;
