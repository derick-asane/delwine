import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { object } from "yup";

const AddProduct = ({ closeForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-3/5 md:w-2/5 mx-auto border border-gray-600 rounded-md p-4 shadow-2xl bg-slate-200 relative z-20"
    >
      <div className="absolute right-0 mr-4" onClick={closeForm}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="w-1/2 text-xl mx-auto text-slate-800 text-center shadow-md">
        Add product
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true, minLength: 3 })}
          className="border border-gray-200 px-3 py-2 rounded-md w-full"
        />
        {errors.name && (
          <span className="text-red-800">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block font-bold mb-1">
          Type
        </label>
        <select
          type="text"
          name="type"
          id="type"
          {...register("type", { required: true })}
          className="boder border-gray-300 py-2 rounded-md w-full"
        >
          <option value="whisky">whisky</option>
          <option value="wine">wine</option>
          <option value="champagne">champagne</option>
        </select>
        {errors.type && (
          <span className="text-red-800">This field is required !!!</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="price" className=" block font-bold mb-1">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          {...register("price", { required: true })}
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
        {errors.price && (
          <span className="text-red-800">This field is required !!!</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="photo" className="font-bold mb-1">
          Photo
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          {...register("photo", { required: true })}
          className="border border-gray-300 py-2 rounded-md w-full"
        />
        {errors.photo && (
          <span className="text-red-800">This field is required !!!</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
