import { useForm } from "react-hook-form";
import Link from "next/link";
import { useUserLoginMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.token) {
        router.push("/");
        toast.success("Login Successful!");
      }

      storeUserInfo({ accessToken: res?.token });
    } catch (err: any) {
      console.error(err.message);
      toast.error("Login failed");
    }
  };

  return (
    <div className="bg-secondary rounded-lg p-10 text-white lg:w-[40%] lg:mx-auto my-20 mx-5">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center font-semibold text-2xl">LOGIN</h3>
          <hr />

          <div className=" mt-4">
            <label htmlFor="">Your Email</label>
            <br />
            <input
              type="email"
              placeholder="Type here"
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
              placeholder="Type here"
              className="input input-bordered w-full text-black"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex justify-center mt-4">
            <button className="border rounded px-4 py-1" type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="mt-4">
          New to Bike Shop{" "}
          <Link className=" text-blue-400" href="/signup">
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
