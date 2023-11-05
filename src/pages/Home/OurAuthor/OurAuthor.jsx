import developer1 from "../../../assets/images/web-coder.jpg";
import developer2 from "../../../assets/images/web-developer-1.jpg";
import graphic1 from "../../../assets/images/graphic-designer.jpg";
import graphic2 from "../../../assets/images/graphic-design-1.jpg";
import marketing1 from "../../../assets/images/digital-marketing-1.jpg";
import marketing2 from "../../../assets/images/digital-marketing-2.jpg";
import "./OurAuthor.css";

const OurAuthor = () => {
  return (
    <div className="bg-gray-100 py-10 md:py-14 lg:py-20 ">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Latest Authors In Shop
          </h3>
          <p className="max-w-3xl mx-auto my-6 text-gray-600">
            Here are some most recent members of our awesome cummunity. All
            carefully featured and hand-picked by our quality assessment team.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* shop 1 */}
          <div className="shopCard bg-white p-2">
            <div className="overflow-hidden">
              <img
                src={developer1}
                alt="shop-photo"
                className="w-full h-[150px] object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base text-center my-2 font-semibold">
              Web-coder
            </h3>
          </div>
          {/* shop 2 */}
          <div className="shopCard bg-white p-2">
            <div className="overflow-hidden">
              <img
                src={marketing1}
                alt="shop-photo"
                className="w-full h-[150px] object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base text-center my-2 font-semibold">
              Digital Hub
            </h3>
          </div>
          {/* shop 3 */}
          <div className="shopCard bg-white p-2">
            <div className="overflow-hidden">
              <img
                src={graphic1}
                alt="shop-photo"
                className="w-full h-[150px] object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base text-center my-2 font-semibold">
              Graphics Master
            </h3>
          </div>
          {/* shop 4 */}
          <div className="shopCard bg-white p-2">
            <div className="overflow-hidden">
              <img
                src={developer2}
                alt="shop-photo"
                className="w-full h-[150px] object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base text-center my-2 font-semibold">
              Web-developing
            </h3>
          </div>
          {/* shop 5 */}
          <div className="shopCard bg-white p-2">
            <div className="overflow-hidden">
              <img
                src={graphic2}
                alt="shop-photo"
                className="w-full  h-[150px] object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base text-center my-2 font-semibold">
              Graphic Design
            </h3>
          </div>
          {/* shop 6 */}
          <div className="shopCard bg-white p-2">
            <div className="overflow-hidden">
              <img
                src={marketing2}
                alt="shop-photo"
                className="w-full h-[150px] object-cover"
              />
            </div>
            <h3 className="text-sm md:text-base text-center my-2 font-semibold">
              Digital Maker
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAuthor;
