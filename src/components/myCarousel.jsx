import { useState } from "react";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // the slide array contains all our images which will be displayed in our carousel
  const slides = [
    {
      id: 1,
      url: "/src/assets/img/products/p1.jpeg",
      title: "Inner view",
    },
    {
      id: 2,
      url: "/src/assets/img/products/p2.jpeg",
      title: "Side view",
    },
    {
      id: 3,
      url: "/src/assets/img/products/p3.jpeg",
      title: "Outer view",
    },
    {
      id: 4,
      url: "/src/assets/img/products/p4.jpeg",
      title: "Inner view",
    },
    {
      id: 5,
      url: "/src/assets/img/products/p5.jpeg",
      title: "Outer view",
    },
  ];

  // this function is used to move our carousel image to the right
  const goForward = () => {
    const end = currentSlide === slides.length - 1;
    const mySlide = end ? currentSlide : currentSlide + 1;
    setCurrentSlide(mySlide);
  };
  // this function is used to move our carousel image to the left
  const goBackward = () => {
    const start = currentSlide === 0;
    const mySlide = start ? currentSlide : currentSlide - 1;
    setCurrentSlide(mySlide);
  };

  return (
    <div className="w-full h-full md:h-fit mb-2 rounded-md">
      <div className="w-[100%] flex justify-center items-start relative md:h-full">
        <img
          src={slides[currentSlide].url}
          alt=""
          className=" w-[100%] md:w-[90%] rounded-md h-[280px] md:h-[600px]"
        />
        <div
          className="absolute left-8 transform -translate-x-1/2 top-1/2 bg-white hover:cursor-pointer text-2xl border-4 border-gray-800"
          onClick={() => goBackward()}
        >
          &lt;
        </div>
        <div
          className="absolute right-8 transform translate-x-1/2 top-1/2 bg-white hover:cursor-pointer text-2xl  border-4 border-gray-800"
          onClick={() => goForward()}
        >
          &gt;
        </div>
      </div>
      <div className="w-[100%] flex justify-center md:text-[50px]">
        <span>{slides[currentSlide].title}</span>
      </div>
    </div>
  );
};

export default MyCarousel;
