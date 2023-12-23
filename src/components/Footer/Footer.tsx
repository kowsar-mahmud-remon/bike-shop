import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="max-w-[1280px] mx-auto">
        <footer className="footer px-5 py-10 ">
          <div className="">
            <div className="flex items-center">
              <Image
                className=" w-20 h-12"
                src={logo}
                width={500}
                height={500}
                alt="Picture of the logo"
              />
              <p className="text-2xl font-semibold">Bike Shop</p>
            </div>
            <div className="mt-2">
              <p>Need any Help</p>
              <p className="mt-1 text-lg font-semibold">
                Call Us: <span className="text-[#fcbf49]"> +880 12354135</span>
              </p>
              <p className="mt-4 mb-1">Love street, Muscat, Oman</p>
              <p>example@gmail.com</p>
            </div>

            <div className="flex gap-4 text-lg mt-4">
              <FaFacebookSquare />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
          <div className="footer">
            <div>
              <span className="footer-title">Company</span>
              <Link href="/" className="link link-hover">
                About Us
              </Link>
              <Link href="/" className="link link-hover">
                Contact Us
              </Link>
              <Link href="/" className="link link-hover">
                Travel Guides
              </Link>
              <Link href="/" className="link link-hover">
                Data Policy
              </Link>
            </div>
            <div>
              <span className="footer-title">Top Shop</span>
              <Link href="/" className="link link-hover">
                Las Vegas
              </Link>
              <Link href="/" className="link link-hover">
                New York City
              </Link>
              <Link href="/" className="link link-hover">
                San Francisco
              </Link>
              <Link href="/" className="link link-hover">
                Hawaii
              </Link>
            </div>
            <div>
              <span className="footer-title mb-7"></span>
              <Link href="/" className="link link-hover">
                Tokyo
              </Link>
              <Link href="/" className="link link-hover">
                Sydney
              </Link>
              <Link href="/" className="link link-hover">
                Melbourne
              </Link>
              <Link href="/" className="link link-hover">
                Dubai
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-md font-semibold">Sign up Newsletter</p>
            <input
              className="py-2 px-4 rounded mt-2"
              type="text"
              name=""
              id=""
              placeholder="Enter email"
            />
            <button className="rounded bg-[#fcbf49] py-2 px-6 ">Submit</button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
