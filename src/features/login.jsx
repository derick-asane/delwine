import { useForm } from "react-hook-form";
import { UserContext } from "../context/userContext";
import { useContext, useEffect } from "react";
import userSevice from "../services/userService";
import { useNavigate } from "react-router-dom";
import { IndicateContext } from "../context/indicateTabContext";

const Login = ({ setOpenLogin }) => {
  const { register, handleSubmit } = useForm();
  const { state, dispatch } = useContext(UserContext);
  const { indicate, setIndicate } = useContext(IndicateContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const user = await userSevice.getUser(data);
      dispatch({ type: "login", payload: user });
      setOpenLogin((prevState) => !prevState);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (state.user.length !== 0) {
      navigate("/products");
      console.log(state.user);
      setIndicate(3);
    }
  }, [state.user, setIndicate, navigate]);
  return (
    <div className="lg:h-screen fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-75">
      <div className=" w-[70%] bg-white p-4 shadow-slate-500 rounded-sm lg:w-[40%] z-30">
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
