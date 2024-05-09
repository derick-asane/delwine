import { useEffect, useState } from "react";
import productService from "../services/productService";
import SearchBar from "../components/searchbar";
import { getProducts } from "../app/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div>
      <div className="w-full flex justify-center">
        <h1 className="italic">List of drinks</h1>
      </div>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
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
                className="w-full h-[100px] md:h-[100px] xl:h-[250px]"
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
    </div>
  );
};

export default Products;
