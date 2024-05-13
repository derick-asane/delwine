import { useEffect, useState } from "react";
import productService from "../services/productService";
import SearchBar from "../components/searchbar";
import { getProducts } from "../app/productSlice";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./addproduct";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, SetIsFormOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const myProducts = await productService.getProducts();
        dispatch(getProducts(myProducts));
      } catch (error) {
        console.error("not found");
      }
    };
    fetchProducts();
  }, []);

  const products = useSelector((state) => state.product.products);
  console.log(products);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isFormOpen]);

  const openForm = () => {
    SetIsFormOpen(true);
  };

  const closeForm = () => {
    SetIsFormOpen(false);
  };

  return (
    <div className="relative">
      <div className="w-full flex justify-center">
        <h1 className="italic font-bold smm:text-[20px] sm:text-[30px] ">
          List of drinks
        </h1>
      </div>
      <div className="flex w-full items-center ">
        <div className="w-full sm:w-3/4 flex justify-center sm:justify-end">
          <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        </div>
        <div className="w-1/4 flex justify-end mr-4 ">
          <button
            className="smm:text-sm sm:text-lg smm:leading-none sm:leading-normal"
            onClick={openForm}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
          >
            <div className="border border-gray-300 rounded-md p-4">
              <img
                src={product.photo}
                alt=""
                className="w-full h-[100px] md:h-[100px] xl:h-[250px] rounded-md"
              />
              <div className=" w-full flex justify-evenly items-center gap-4 mt-4">
                <h3 className="text-xs md:text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="text-xs  md:text-lg  text-gray-600">
                  Price: ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isFormOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-slate-100 bg-opacity-50">
          <AddProduct closeForm={closeForm} />
        </div>
      )}
    </div>
  );
};

export default Products;
