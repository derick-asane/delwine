import mycherry from "/src/assets/img/cherry.svg";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="md:absolute  inset-0  w-[100%] flex flex-col md:flex-row justify-center items-center  gap-4">
        <div className="w-[100%] md:w-[40%] ">
          <img src={mycherry} alt="" />
        </div>
        <div className="w-[100%] md:w-[40%]  p-2">
          <span className="text-[20px] font-bold md:text-[30px] lg:text-[40px] xl:text-[50px] ">
            Best quality drinks
          </span>
          <div className="text-[20px] md:text-[20px] lg:text-[30px]">
            <span>
              Welcome to our cellar of indulgence. Explore our curated selection
              of fine wines and whiskies, where each bottle holds a story
              waiting to be savored. Cheers to memorable moments ahead!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
