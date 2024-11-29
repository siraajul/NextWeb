import axios from "axios";
import React, { useState } from "react";

const SignUpComponents = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleSubmit = async () => {
    console.log("Trigger");
    try {
      const payload = {
        Name: name,
        Phone: phone,
        Email: email,
        Password: password,
      };

      // Make the API call
      const response = await axios.post(
        "https://wilful-cricket-badcodersbd-7492dcf3.koyeb.app/auth/login", // Replace with your API URL
        payload, // Send payload directly
        {
          headers: {
            "Content-Type": "application/json", // Specify JSON content
          },
        }
      );

      // Handle success response
      console.log("Success:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className=" bg-white min-h-screen p-10 ">
        <h1 className=" text-2xl font-bold text-blue-400 text-center ">
          Registration From
        </h1>
        <div className=" w-full flex justify-center items-center">
          <div className="  border border-gray-400 p-5 rounded-lg flex flex-col gap-5 w-[65%]">
            <label className=" text-black">Name:</label>
            <input
              className=" border border-blue-500 p-3 rounded-full text-black "
              type="text"
              title="Name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className=" text-black">Phone:</label>
            <input
              className=" border border-blue-500 p-3 rounded-lg text-black "
              type="text"
              title="Phone"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className=" text-black">Email:</label>
            <input
              className=" border border-blue-500 p-3 rounded-md text-black "
              type="text"
              title="Email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className=" text-black">Password:</label>
            <input
              className=" border border-blue-500 p-3 rounded-full text-black "
              type="text"
              title="Password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full flex justify-center items-center">
              <button
                title="Submit"
                type="button"
                onClick={() => handleSubmit()}
                className="border bg-blue-600 rounded-full px-3 py-2 w-[50%] text-white "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpComponents;
