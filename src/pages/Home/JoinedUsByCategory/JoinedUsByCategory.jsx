import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdSell } from "react-icons/md";

const JoinedUsByCategory = () => {
  return (
    <div className="flex w-fll flex-col md:flex-row justify-between items-center w-full">
      <div className="py-20  w-full h-full flex  justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className=" px-8 text-center">
          <div className="p-5  mb-8 md:p-8 bg-white rounded-full inline-block">
            <MdSell className="text-3xl md:text-4xl "></MdSell>
          </div>
          <h3 className="text-xl py-5 md:text-4xl font-semibold text-white">
            Become A Seller
          </h3>
          <p className="text-white mb-10 leading-relaxed">
            Start earning money by selling products like electronics, templates,
            templates, <br /> graphics design on marketplace.biggest online
            directories in the world right now
          </p>
          <button className="font-medium bg-[#7CCC01] border border-[#7CCC01] hover:bg-[#0870A1] hover:border-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            Open Your Shop
          </button>
        </div>
      </div>
      <div className="py-20  w-full h-full flex  justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="px-8 text-center">
          <div className="p-5  mb-8 md:p-8 bg-white rounded-full inline-block">
            <AiOutlineShoppingCart className="text-3xl md:text-4xl "></AiOutlineShoppingCart>
          </div>
          <h3 className="text-xl py-5 md:text-4xl font-semibold text-white">
            Speed Up Business
          </h3>
          <p className="text-white mb-10 leading-relaxed">
            Purchase from our products one of the biggest online directories in
            the world <br /> right now. Start earning money by selling products
            like electronics.
          </p>
          <button className="font-medium bg-[#7CCC01] border border-[#7CCC01] hover:bg-[#0870A1] hover:border-[#0870A1] text-white py-2 px-5 rounded-md duration-300">
            Get Hired
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinedUsByCategory;
