import axios from "axios";
import Image from "next/image";
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
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {products.map((data, index) => (
            <div
              key={index}
              className=" border text-black border-blue-600 cursor-pointer p-5 rounded-xl"
            >
              <div className=" w-full flex justify-center items-center p-2 h-[200px] ">
                <Image 
                src={data?.product_prodimage}
                alt={data?.product_name}
                height={100}
                width={100}
                //fill
                //style={{  width: "100%", height: "100%" }}
              
              />
              </div>
              
              <h1>Product Name: {data?.product_name} </h1>
              <h1>Product Price: {data?.product_price} </h1>
              <div className=" flex justify-center items-center p-2  ">
              <button className=" bg-orange-600 py-2 px-3 border border-orange-500 rounded-lg text-white hover:bg-green-800">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductComponents;
