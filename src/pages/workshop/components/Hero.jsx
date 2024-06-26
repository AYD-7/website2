import Button from "../../../components/Button.jsx";
import curvedBackground from "../../../assets/svg/career/curved-background.svg";
import heroImg from "../../../assets/workshop/hero.png";

export default function Hero() {
  return (
    <div>
      <div className="bg-[#082B5B] ">
        <div className=" grid lg:grid-cols-[auto_1fr] relative gap-4 lg:pt-48 pt-28 pb-5 lg:px-[60px] px-4 max-w-[100rem] mx-auto">
          <div className="grid gap-4 max-w-3xl">
            <h2 className="text-[#fff] lg:text-[65px] text-[35px] font-bold lg:leading-[70px] leading-10 capitalize ">
              Be a part of our sponsored and partnered training Workshops
            </h2>
            <p className="text-[#8896AB] lg:text-xl text-lg lg:leading-8 font-medium leading-6 max-w-lg">
              Join our sponsored and partnered training workshop programs. Grow
              your skills and knowledge in a supportive environment
            </p>
            <div className="w-80">
              <Button
                type="customizedWhite"
                text="Join Ongoing Workshop"
                className="rounded-md"
              />
            </div>

            <div className="lg:px-[54px] px-4 lg:hidden block">
              <div className="text-lg font-bold underline text-[#fff]">
                <p>Sponsor or Partner with us</p>
              </div>
            </div>
          </div>
          <div className="relative h-32 lg:h-auto lg:w-auto">
            <div className="lg:w-[554px] lg:h-[464px] mx-auto absolute lg:block top-[20px] px-5 z-20 lg:place-self-start">
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f3f9] relative ">
        <div className="lg:px-[54px] px-4 max-w-[100rem] mx-auto lg:block hidden">
          <div className="text-lg font-bold underline text-[#fff] absolute top-0  z-10">
            <p>Sponsor or Partner with us</p>
          </div>
        </div>

        <img src={curvedBackground} />
      </div>
    </div>
  );
}
