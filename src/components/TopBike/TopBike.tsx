import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/topBike01.jpg";
import img2 from "../../assets/topBike02.jpg";
import img3 from "../../assets/topBike03.jpg";
import img4 from "../../assets/topBike04.jpg";
import Image from "next/image";

const TopBike = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 my-20">
      <div className="lg:flex justify-between">
        <div className="">
          <p className="text-primary text-md font-medium">Popular</p>
          <h4 className="text-secondary mt-1 mb-6 text-3xl font-bold">
            Best Selling
          </h4>
        </div>
        <div className="flex items-center text-secondary">
          <p className="font-semibold mr-2">See All</p>
          <FaArrowRight />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="">
          <div className="flex justify-center ">
            <Image
              className="w-full h-52 rounded-lg"
              src={img1}
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
          <h5 className="mt-2 font-bold">EICMA 2022</h5>
        </div>

        <div className="">
          <div className="flex justify-center ">
            <Image
              className="w-full h-52 rounded-lg"
              src={img2}
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
          <h5 className="mt-2 font-bold">2013 MV AGUSTA BRUTALE</h5>
        </div>

        <div className="">
          <div className="flex justify-center ">
            <Image
              className="w-full h-52 rounded-lg"
              src={img3}
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
          <h5 className="mt-2 font-bold">Suzuki GSX1300R 2022</h5>
        </div>

        <div className="">
          <div className="flex justify-center ">
            <Image
              className="w-full h-52 rounded-lg"
              src={img4}
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>
          <h5 className="mt-2 font-bold">Suzuki Introduces</h5>
        </div>
      </div>
    </div>
  );
};

export default TopBike;
