import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useCreateUserMutation } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [createUser, { data }] = useCreateUserMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const userData = {
        ...data,
        role: "user",
      };
      const res = await createUser(userData).unwrap();

      if (res?.token) {
        router.push("/");
        toast.success("Successfully Register!");
      }

      storeUserInfo({ accessToken: res?.token });
    } catch (err: any) {
      console.error(err.message);
      toast.error("Sign Up failed");
    }
  };

  return (
    <div className="bg-secondary rounded-lg p-10 text-white lg:w-[40%] lg:mx-auto my-20 mx-5">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center font-semibold text-2xl">LOGIN</h3>
          <hr />

          <div className=" mt-4">
            <label htmlFor="">Your Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full text-black"
              {...register("name", { required: true })}
            />
          </div>

          <div className=" mt-4">
            <label htmlFor="">Your Image Url</label>
            <br />
            <input
              type="text"
              placeholder="Enter imgUrl here"
              className="input input-bordered w-full text-black"
              {...register("imgUrl")}
            />
          </div>

          <div className=" mt-4">
            <label htmlFor="">Your Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full text-black"
              {...register("email", { required: true })}
            />
          </div>
          <br />
          <div className="">
            <label htmlFor="">Your Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full text-black"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button className="border rounded px-4 py-1" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4">
          Already have account{" "}
          <Link className=" text-blue-400" href="/login">
            Please login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
