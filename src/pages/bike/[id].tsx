import RootLayout from "@/components/Layout/RootLayout";
import { useGetSingleBikeQuery } from "@/redux/features/bike/bikeApi";
import { useCreateCheckoutMutation } from "@/redux/features/checkout/checkoutApi";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const NestedPage = () => {
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

  const id = router.query.id;

  const { data, isLoading } = useGetSingleBikeQuery(id);
  const [createCheckout] = useCreateCheckoutMutation();

  const bikeData = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center my-20 text-success">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleAddToCart = async () => {
    try {
      const bikeDetails = {
        name: bikeData?.title,
        imgUrl: bikeData?.imgUrl,
        userId: user?._id,
      };

      const res = await createCheckout(bikeDetails).unwrap();

      if (res?.statusCode === 200) {
        router.push("/checkout");
        toast.success("Successfully AddToCart!");
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error(" AddToCart failed");
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 my-10">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Bike Details Page
      </h2>
      <div className="lg:w-[50%] mx-auto">
        <div className=" bg-slate-200 p-4 rounded-lg hover:shadow-2xl">
          <div className="">
            <Image
              className="w-full h-72"
              src={bikeData?.imgUrl}
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Bike Name:{" "}
              <span className=" font-normal"> {bikeData?.title}</span>
            </h2>
            <h2 className="text-lg font-semibold mt-2">
              Bike Color:{" "}
              <span className=" font-normal">
                {" "}
                {bikeData?.variations?.color}
              </span>
            </h2>

            <h2 className="text-lg font-semibold mt-2">
              Bike Size:
              <span className=" font-normal">
                {" "}
                {bikeData?.variations?.size}
              </span>
            </h2>
          </div>
          <div className="flex justify-center">
            <button onClick={handleAddToCart} className="btn btn-success mt-8">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedPage;

NestedPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
