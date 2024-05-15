import contact from "/src/assets/img/contact-us-animate.svg";

const ContactUs = () => {
  return (
    <div className=" md:h-screen w-full  flex gap-1 flex-col-reverse justify-around md:gap-0 md:flex-row md:justify-around items-center lg:w-[70%] lg:mx-auto">
      <div className=" w-[80%]  md:w-[40%] lg:w-[60%] h-full flex flex-col justify-center  gap-4 mb-2 md:mb-0 ">
        <div className="flex rounded-lg bg-slate-400 justify-evenly items-center shadow-slate-600">
          <div className="w-[20%] md:w-[20%] lg:w-[20%] flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="w-[80%] md:w-[80%] flex justify-start">
            <span className="text-[22px] md:text-[50px] text-white">
              delwine@gmail.com
            </span>
          </div>
        </div>

        <div className="flex rounded-lg bg-slate-400 justify-evenly items-center shadow-slate-600">
          <div className="w-[20%] md:w-[20%] lg:w-[20%] flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <div className="w-[80%] md:w-[80%] flex justify-start ">
            <span className="text-[22px] md:text-[50px] text-white">
              Carrefour Simbock
            </span>
          </div>
        </div>
        <div className="flex rounded-lg bg-slate-400 justify-evenly items-center shadow-slate-600">
          <div className="w-[20%] md:w-[20%] lg:w-[20%] flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
          </div>
          <div className="w-[80%] md:w-[80%]  flex justify-start ">
            <span className="text-[22px] md:text-[50px]  text-white ">
              674-016-433
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 lg:mt-4  w-[80%] lg:w-[30%] md:mt-0 md:w-[40%]">
        <img src={contact} alt="" />
      </div>
    </div>
  );
};

export default ContactUs;
