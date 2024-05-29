import { useContext, useEffect, useState } from "react";
import productService from "../services/productService";
import SearchBar from "../components/searchbar";
import { getProducts } from "../app/productSlice";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./addproduct";
import ModifyProduct from "./modifyproduct";
import NotificationPop from "../components/notification-pop";
import { UserContext } from "../context/userContext";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModifyProductFormOpen, setIsModifyProductFormOpen] = useState(false);
  const [showCrud, setShowCrud] = useState(false);
  const [idProduct, setIdProduct] = useState(null);
  const [modifyProductData, setModifyProductData] = useState(null);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [notificationMessage, SetNotificationMessage] = useState("");
  const [notificationType, SetNotificationType] = useState(true);
  const { state, dispatch } = useContext(UserContext);

  const dispatche = useDispatch();

  //this function is used to get the products from my endpoint
  const fetchProducts = async () => {
    try {
      const myProducts = await productService.getProducts();
      dispatche(getProducts(myProducts));
    } catch (error) {
      console.error("not found");
    }
  };

  //close Notification popup

  const handleCose = () => {
    setIsNotificationVisible((notification) => !notification);
  };

  //this useEffect is to call the function when the page first loads
  useEffect(() => {
    fetchProducts();
  }, [isModifyProductFormOpen]);

  const products = useSelector((state) => state.product.products);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //this useEffect helps us to hide the scroll bar once the user clicks on the addProduct page
  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isFormOpen]);

  //this useEffect helps us to hide the scroll bar once the user clicks on the modifyProduct page
  useEffect(() => {
    if (isModifyProductFormOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModifyProductFormOpen]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const openModifyProductForm = () => {
    setIsModifyProductFormOpen(true);
  };

  const closeModifyProductForm = () => {
    setIsFormOpen(false);
  };

  // function to delete a product
  const deleteProduct = async (id) => {
    try {
      const response = await productService.deleteProduct(id);
      console.log(response.data);
      SetNotificationMessage("Product deleted the successfully !!!");
      SetNotificationType(true);
      fetchProducts();
      setIsNotificationVisible((noti) => !noti);
    } catch (error) {
      SetNotificationMessage("Failed to delete product");
      SetNotificationType(false);
      throw new Error(error);
    }
  };

  // const modifyProduct = async (id, data) => {
  //   try {
  //     const response = await productService.modifyProduct(id, data);
  //     console.log(response.data);
  //     fetchProducts();
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  return (
    <>
      {isNotificationVisible && (
        <NotificationPop
          message={notificationMessage}
          type={notificationType}
          handleClose={handleCose}
        />
      )}
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
              className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8 "
            >
              <div className="border border-gray-300 rounded-md p-4 ">
                <div
                  className="relative "
                  onClick={() => {
                    setIdProduct(product.id);
                    setShowCrud(!showCrud);
                  }}
                >
                  {state.user.length === 1 &&
                    showCrud &&
                    product.id === idProduct && (
                      <div className="absolute h-full w-full flex flex-col gap-3 justify-center items-center inset-0 ">
                        <div
                          className="w-[60%] bg-green-500 flex justify-center text-white rounded-lg hover:cursor-pointer lg:w-[50%] lg:p-4"
                          onClick={() => {
                            setModifyProductData(product);
                            openModifyProductForm();
                          }}
                        >
                          <span>modify</span>
                        </div>
                        <div
                          className="w-[60%] bg-red-700 flex justify-center text-white rounded-lg hover:cursor-pointer lg:w-[50%] lg:p-4"
                          onClick={() => {
                            deleteProduct(product.id);
                          }}
                        >
                          <span>delete</span>
                        </div>
                      </div>
                    )}
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="w-full h-[100px] md:h-[100px] xl:h-[250px] rounded-md"
                  />
                </div>
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
          <div
            className={`fixed inset-0 flex items-center justify-center bg-gray-300 opacity-95 z-20 ${
              isFormOpen ? "" : "hidden"
            }`}
          >
            <AddProduct closeForm={closeForm} />
          </div>
        )}
        {isModifyProductFormOpen && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-gray-300 opacity-95 z-20 ${
              isModifyProductFormOpen ? "" : "hidden"
            }`}
          >
            <ModifyProduct
              isModifyProductFormOpen={isModifyProductFormOpen}
              setIsModifyProductFormOpen={setIsModifyProductFormOpen}
              modifyProductData={modifyProductData}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
