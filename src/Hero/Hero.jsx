import { ArrowRightIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="hero h-[405px] bg-[#0058FF] w-[1200px] rounded">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-[24px] md:text-[32px] lg:text-[48px] lg:font-[inter] ">
              Get In Touch
            </h1>
            <p className="py-6 xl:text-[18px] md:text-[14px] text-[14px]">
              Contact us now to enquire our plumbing services, whether you have
              a commercial project that requires support, or a domestic plumbing
              task that needs the attention of a trusted professional.
            </p>
            <button className="btn btn-primary bg-[white] text-[#0058FF]  xl:text-[16px] sm:text-[10px]">
              Book a Professional Plumber
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
