import { useState } from "react";

const MyCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      url: "/src/assets/img/products/p1.jpeg",
      title: "inner view",
    },
    {
      id: 2,
      url: "/src/assets/img/products/p2.jpeg",
      title: "side view",
    },
    {
      id: 3,
      url: "/src/assets/img/products/p3.jpeg",
      title: "outer view",
    },
    {
      id: 4,
      url: "/src/assets/img/products/p4.jpeg",
      title: "inner view",
    },
    {
      id: 5,
      url: "/src/assets/img/products/p5.jpeg",
      title: "outer view",
    },
  ];

  const goForward = () => {
    const end = currentSlide === slides.length - 1;
    const mySlide = end ? currentSlide : currentSlide + 1;
    setCurrentSlide(mySlide);
  };
  const goBackward = () => {
    const start = currentSlide === 0;
    const mySlide = start ? currentSlide : currentSlide - 1;
    setCurrentSlide(mySlide);
  };

  return (
    <div className="w-full h-full sm:h-0 bg-slate-300 mb-2 rounded-md">
      <div className="w-[100%] flex justify-center mt-2 relative">
        <img
          src={slides[currentSlide].url}
          alt=""
          className=" w-[90%] rounded-md h-[280px]"
        />
        <div
          className="absolute left-8 transform -translate-x-1/2 top-1/2 bg-slate-300 hover:cursor-pointer text-2xl"
          onClick={() => goBackward()}
        >
          &lt;
        </div>
        <div
          className="absolute right-8 transform translate-x-1/2 top-1/2 bg-slate-300  hover:cursor-pointer text-2xl"
          onClick={() => goForward()}
        >
          &gt;
        </div>
      </div>
      <div className="w-[100%] flex justify-center">
        <span>{slides[currentSlide].title}</span>
      </div>
    </div>
  );
};

export default MyCarousel;
