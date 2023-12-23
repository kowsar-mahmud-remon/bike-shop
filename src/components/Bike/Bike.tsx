import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BikePage = () => {
  const { data, isLoading } = useGetAllBikesQuery({});

  const bikeData = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center my-20 text-success">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="max-w-[1440px] mx-auto px-5 my-20">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Your Dream Bike
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {bikeData?.map((data: any) => (
          <Link href={`/bike/${data?._id}`} key={data?._id}>
            <div className=" bg-slate-200 p-4 rounded-lg hover:shadow-2xl">
              <Image
                className="w-full h-60"
                src={data?.imgUrl}
                width={500}
                height={500}
                alt="Picture of the bike"
              />
              <h2 className="text-lg font-semibold mt-4 text-center">
                {data?.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BikePage;
