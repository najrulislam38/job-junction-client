import developer from "../../../assets/images/developer.png";

const Banner = () => {
  return (
    <div className="bg-[#008FD4]">
      <div className="max-w-screen-xl h-screen mx-auto px-5 md:px-10 flex gap-7 lg:gap-10 ">
        <div className="w-full md:w-2/3 h-full  flex items-center justify-center  ">
          <div className="text-white">
            <span className="text-xl">Welcome To The</span>
            <h1 className="text-xl lg:text-3xl font-semibold">
              <span className="text-3xl lg:text-5xl pt-3 pb-1 block">
                Awesome Creative Marketplace
              </span>{" "}
              Find the right service, right away
            </h1>
            <p className="py-5">
              Explore from thousands of premium quality services.
            </p>
            <div className="py-10 space-x-2">
              <button className="font-medium bg-[#7CCC01] border border-[#7CCC01] hover:bg-[#0870A1] hover:border-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
                Explore Now
              </button>
              <button className="font-medium bg-white text-black border  hover:bg-[#0870A1] hover:text-white py-2 px-5 rounded-md duration-300">
                Become A Seller
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 relative">
          <img src={developer} alt="" className="w-full h-full object-cover" />
          <div className=" absolute bottom-10 right-0 p-3 rounded-full bg-slate-400 bg-opacity-60 flex gap-3 items-center  ">
            <img
              src={developer}
              alt=""
              className="w-14 rounded-full bg-white  "
            />
            <div className="text-white">
              <p className="text-sm font-medium">@liyo.developer345</p>
              <h3 className="font-bold">Web Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
