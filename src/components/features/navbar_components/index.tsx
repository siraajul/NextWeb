import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavBarComponents = () => {
  const pathname = usePathname();
  console.log("PathName: ", pathname);

  return (
    <>
      <div className=" grid grid-cols-3 bg-gray-50 py-3 px-5 w-full">
        <div className=" flex justify-center items-center">
          <Image src="/logo/logo.png" width={60} height={50} alt="Logo" />
        </div>
        <div className=" flex justify-center items-center gap-5 ">
          <p className="hover:text-blue-500 cursor-pointer">Home</p>
          <p className="hover:text-blue-500 cursor-pointer">About</p>
          <p className="hover:text-blue-500 cursor-pointer">Contact</p>
          <p className="hover:text-blue-500 cursor-pointer">Team</p>
        </div>
        <div className=" flex justify-center items-center gap-5">
          {pathname === "/signup" && (
            <Link
              href="/login"
              className=" bg-green-600 py-2 px-3 border border-green-500 rounded-lg text-white hover:bg-green-800"
            >
              Login
            </Link>
          )}
          {pathname === "/login" && (
            <Link
              href="/signup"
              className=" bg-blue-600 py-2 px-3 border border-blue-500 rounded-lg text-white hover:bg-blue-800"
            >
              SignUp
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default NavBarComponents;
