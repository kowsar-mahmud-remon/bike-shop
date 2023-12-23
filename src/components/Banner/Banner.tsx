import Image from "next/image";
import Link from "next/link";
import React from "react";
// import img1 from '../../assets/bannerImg01.jpg';
// import img2 from '../../assets/bannerImg02.jpg';

const Banner = () => {
  return (
    <div className="mx-5">
      <div className="bgImg max-w-[1440px] mx-auto px-5 flex justify-center py-32 lg:py-44 mt-5">
        <div className="mb-4 text-center">
          <p className="text-[#fcbf49] text-xl ">Find Your</p>
          <p className=" text-6xl text-white font-semibold mb-2">Dream Bike</p>
          <p className="text-white">
            Be the first to know about killer deals, new releases, & more!
          </p>
          <div className="flex justify-center">
            <Link href="/bike">
              <button className="px-5 py-2 bg-secondary mt-4 text-white rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
