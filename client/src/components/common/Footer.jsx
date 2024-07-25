import React from "react";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GrYoutube } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className="mt-20">
      <footer className="bg-[#536F85] px-32 flex flex-col justify-center  text-white py-6">
        <div className="container flex flex-col gap-10 justify-center mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Eonify</h2>
          <nav className="mb-4">
            <a href="#home" className="text-white mx-4 hover:underline">
              Home
            </a>
            <a href="#for-student" className="text-white mx-4 hover:underline">
              For Student
            </a>
            <a href="#resources" className="text-white mx-4 hover:underline">
              Resources
            </a>
            <a href="#about-us" className="text-white mx-4 hover:underline">
              About Us
            </a>
            <a href="#contact-us" className="text-white mx-4 hover:underline">
              Contact Us
            </a>
          </nav>
          <div className="flex justify-center gap-7 space-x-4 mb-4">
            <a href="#whatsapp" className="text-white hover:text-gray-400">
              <SiWhatsapp size={35}/>
            </a>
            <a href="#facebook" className="text-white hover:text-gray-400">
              <FaFacebook size={35}/>
            </a>
            <a href="#twitter" className="text-white hover:text-gray-400">
            <AiFillTwitterCircle size={35}/>
            </a>
            <a href="#email" className="text-white hover:text-gray-400">
            <HiOutlineMail size={35}/>
            </a>
            <a href="#youtube" className="text-white hover:text-gray-400">
            <GrYoutube size={35}/>
            </a>
            <a href="#instagram" className="text-white hover:text-gray-400">
            <FaSquareInstagram size={35}/>
            </a>
          </div>
          <p className="text-xs mb-4">
            The Ministry of Tourism and Creative Economy introduced InDOnesia
            CARE, a symbol of support for Indonesia’s strong The Ministry of
            Tourism and Creative Economy introduced InDOnesia CARE, a symbol of
            support for Indonesia’s strong
          </p>
          <p className="text-xs">Copyright @ Eonify Private Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
