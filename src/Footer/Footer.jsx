import { CiMail } from "react-icons/ci";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal font-[inter] text-black font-[14px]  p-10">
        <nav className="lg:w-full ">
          <h1 className="xl:text-[32px]">Business Logo</h1>
          <div className="flex gap-3 text-[20px]  mt-8">
            <FaFacebook />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
          </div>
        </nav>
        <nav>
          <h6 className=" font-bold text-black">Our Services</h6>
          <a className="link link-hover">Plumbing</a>
          <a className="link link-hover">Drainage</a>
          <a className="link link-hover">Bathrooms</a>
          <a className="link link-hover">Commercial</a>
        </nav>
        <nav>
          <h6 className=" font-bold  text-black">Useful Links</h6>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Updates</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Rates</a>
        </nav>
        <nav>
          <h6 className=" font-bold  text-black">Customer Satisfied </h6>
          <a className="link link-hover">Customer Services</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className=" font-bold  text-black">Contact Info</h6>
          <div className="flex center align-middle justify-center gap-2">
            <FaLocationDot className="text-[24px]"></FaLocationDot>
            <h3>1 Sail Street, London, SE11 6NQ</h3>
          </div>
          <div className="flex center align-middle justify-center gap-2">
            <CiMail className="text-[24px]"></CiMail>
            <h3>enquiries@PlumbingPros.com</h3>
          </div>
          <div className="flex center align-middle justify-center gap-2">
            <FaPhoneAlt className="text-[24px]"></FaPhoneAlt>
            <h3>020 4527 6474</h3>
          </div>
        </form>
      </footer>
      <div className="flex justify-between  text-black">
        <h1 className="ml-10">© Plumbing Pros. All Rights Reserved </h1>
        <h1 className="mr-10">Website by IH Adventure And Creative </h1>
      </div>
    </div>
  );
};

export default Footer;
