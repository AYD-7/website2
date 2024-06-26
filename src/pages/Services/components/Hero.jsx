import image10 from "../../../assets/our_services/image 10.png";
import rectangle from "../../../assets/our_services/Rectangle 1.png";
import { FaQuoteRight } from "react-icons/fa6";
import PageLayout from "../../../components/Layout/PageLayout";

export default function Hero() {
  return (
    <PageLayout className="lg:pt-36 lg:pb-28 pt-28 pb-16">
      <div className="flex items-center gap-3">
        <h3 className="text-[#1877F9] font-medium leading-8 text-xl">
          Our Services
        </h3>

        <img src={rectangle} className="w-20 h-[2px] " alt="" />
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <h1 className="lg:text-5xl text-4xl text-[#082B5B] font-bold lg:max-w-xl leading-10">
          Empowering Creativity, Building Excellent products.
        </h1>

        <p className="lg:text-lg leading-6 text-[#101010]">
          We believe that creativity is the key to building excellence. Our
          products are designed with love and attention to detail, to create an
          emotional connection with users. We strive to create products that are
          not only functional, npbut also beautiful and meaningful.
        </p>
      </div>

      <div className="relative grid lg:grid-cols-[350px_1fr] lg:py-10 pt-32">
        <div className="hidden lg:block"></div>

        {/* Text quote on image */}
        <div className="absolute lg:top-[20%] top-[10%] lg:left-0 left-10  bg-[#1877F9] lg:h-[429px] lg:w-[455px] w-[290px] h-[197px]">
          <FaQuoteRight className="rotate-180 lg:text-9xl text-5xl text-white" />
          <div className="grid mx-auto lg:max-w-sm max-w-60">
            <p className="text-white lg:text-xl text-sm lg:leading-10 leading-5 lg:font-medium ">
              Whether we’re building new products from ground up, or
              transforming existing infrastructure, we know what it takes to
              make a digital product succeed at scale.
            </p>
          </div>
        </div>

        <img
          src={image10}
          alt=""
          className="w-full lg:h-auto h-[200px] justify-end"
        />
      </div>
    </PageLayout>
  );
}
