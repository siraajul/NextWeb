import axios from "axios";
import React, { useEffect, useState } from "react";

type ProductType = {
  product_id: number;
  product_name: string;
  product_description: string;
  product_slug: string;
  product_prodimage: string;
  product_price: number;
  product_offerprice: number;
  product_packsize: string;
};

const ProductComponents = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  console.log(products);

  useEffect(() => {
    const handleSubmit = async () => {
      console.log("Trigger");
      try {
        // Make the API call
        const response = await axios.get(
          "https://wilful-cricket-badcodersbd-7492dcf3.koyeb.app/products/public-list",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Handle success response
        //console.log("Success:", response.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit();
  }, []);

  return (
    <>
      <div className=" bg-white min-h-screen">
        <h1 className=" text-black text-2xl font-semibold">
          Product Components
        </h1>
        <div className="p-10 flex gap-5">
          {products.map((data, index) => (
            <div
              key={index}
              className=" border text-black border-blue-600 hover:bg-blue-700 hover:text-white cursor-pointer p-5 rounded-xl"
            >
              <h1>Product Name: {data?.product_name} </h1>
              <h1>Product Price: {data?.product_price} </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductComponents;
