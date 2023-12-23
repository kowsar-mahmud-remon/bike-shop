import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  const [clientRender, setClientRender] = useState(false);

  useEffect(() => {
    setClientRender(true);
  }, []);

  const logOut = () => {
    removeUserInfo("accessToken");
    router.push("/login");
  };

  const menuItems = (
    <React.Fragment>
      <li className="">
        <Link href="/">Home</Link>
      </li>
      <li className="">
        <Link href="/bike">Products</Link>
      </li>
      <li className="">
        <Link href="/checkout">Checkout</Link>
      </li>
    </React.Fragment>
  );

  const navbarShadow = {
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.4)",
  };

  return (
    <div className="w-full bg-secondary sticky top-0 z-10" style={navbarShadow}>
      <div className="max-w-[1440px] mx-auto navbar flex justify-between py-0">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            href="/"
            className="cursor-pointer normal-case text-xl pl-1 flex items-center"
          >
            <Image
              className=" w-24 h-12"
              src={logo}
              width={500}
              height={500}
              alt="Picture of the logo"
            />{" "}
            <h2 className="text-2xl font-semibold text-white">Bike Shop</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0 text-lg">{menuItems}</ul>
        </div>

        <div className="text-white">
          {clientRender && userLoggedIn ? (
            <button
              onClick={logOut}
              className="px-4 py-1 w-24 rounded-lg bg-red-500"
            >
              Log Out
            </button>
          ) : (
            <Link href="/login">
              <button className="px-4 py-1 w-24 rounded-lg bg-green-500">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
