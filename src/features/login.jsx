import { useForm } from "react-hook-form";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import userSevice from "../services/userService";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(UserContext);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const user = await userSevice.getUser(data);
      dispatch({ type: "getUser", payload: user });
      console.log(state.user);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="lg:h-screen flex justify-center items-center">
      <div className="w-[70%] bg-white p-4 mt-[10%] mb-6 shadow-slate-500 rounded-sm">
        <div className="w-full flex justify-center">
          <h1 className="font-bold font-sm my-8">Login</h1>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
          <div className=" bg-white rounded-lg mb-4">
            <label className="w-[30%] block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email ..."
              className=" focus:outline-none border-b-2 w-[100%]"
              {...register("email", { required: true })}
            />
          </div>
          <div className=" bg-white rounded-lg ">
            <label className="w-[30%] block" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password ..."
              className=" focus:outline-none border-b-2 w-[100%]"
              {...register("password", { required: true })}
            />
          </div>
          <div className="w-full flex justify-center mt-8 rounded-lg bg-blue-200 ">
            <input type="submit" className="w-[80%] hover:cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
