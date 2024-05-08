import { useEffect, useState } from "react";
import productService from "../services/productService";
import SearchBar from "../components/searchbar";

const Products = () => {
  const [product, SetProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const myProducts = await productService.getProducts();
        SetProduct(myProducts);
        console.log(myProducts);
      } catch (error) {
        console.error("not found");
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = product.filter((product) =>
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
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
          >
            <div className="border border-gray-300 rounded-md p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="mt-2 text-gray-600">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
