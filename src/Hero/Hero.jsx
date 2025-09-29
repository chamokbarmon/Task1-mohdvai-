import "./Hero.css";

const Hero = () => {
  return (
    // <div className=" bgColor text-center w-[1360px] ">
    //   <div >
    //     <h1>Get In Touch</h1>
    //     <p>
    //       Contact us now to enquire our plumbing services, whether you have a
    //       commercial project that requires support, or a domestic plumbing task
    //       that needs the attention of a trusted professional.
    //     </p>
    //     <button>Book a Professional Plumber</button>
    //   </div>
    // </div>
    <div className="w-full flex justify-center">
      <div className="hero h-[405px] bg-[#0058FF] w-[1200px] rounded">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-[24px] md:text-[32px] lg:text-[48px] lg:font-[inter] ">
              Get In Touch
            </h1>
            <p className="py-6">
              Contact us now to enquire our plumbing services, whether you have
              a commercial project that requires support, or a domestic plumbing
              task that needs the attention of a trusted professional.
            </p>
            <button className="btn btn-primary">
              Book a Professional Plumber
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
