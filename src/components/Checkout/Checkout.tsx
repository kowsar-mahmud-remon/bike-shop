import RootLayout from "@/components/Layout/RootLayout";
import { useGetSingleCheckoutQuery } from "@/redux/features/checkout/checkoutApi";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const CheckoutPage = () => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  const [isLoadingg, setIsLoadingg] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoadingg(true);
  }, [router, isLoadingg]);

  const user: any = getUserInfo();

  const { data, isLoading } = useGetSingleCheckoutQuery(user?._id);

  const bikeData = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center my-20 text-success">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (bikeData?.length === 0) {
    return (
      <div className="mt-20 mb-40">
        <h2 className="text-4xl font-semibold text-center">
          You have not added any items
        </h2>
        <p className="text-xl  mt-4 text-center">
          Please go to products page and Add To Card item
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-5 my-10">
      <h2 className="text-4xl font-semibold mb-8 text-center">Checkout Page</h2>
      <div className="lg:w-[60%] mx-auto">
        {bikeData?.map((data: any) => (
          <div
            key={data?._id}
            className=" bg-slate-200 p-4 rounded-lg hover:shadow-2xl flex justify-between items-center mb-4"
          >
            <div className="">
              <h2 className="text-lg font-semibold">
                Bike Name: <span className=" font-normal"> {data?.name}</span>
              </h2>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-success">Checkout</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
