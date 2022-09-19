import React from "react";
import Image from "next/image";
import Oferta from "./components/Oferta";
import CloudTech from "./components/CloudTech";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Footer({}) {
  return (
    <div
      id="home__footer"
      className={` max-w-75vw p-4 flex items-center justify-center text-center max-h-75vh m-auto`}
    >
      <footer className="flex m-auto mt-[120px] mb-[74px] max-w-[1187px]">
        <div className="w-full flex m-auto">
          <div className="flex flex-col justify-between ml-16 w-max-35vw">
            <img src={"/image/logo1_1.png"} width={100} height={100} />
            <Oferta />
          </div>
          <div className="flex w-full ">
            <div id="AboutUs" className="">
              <CloudTech />
            </div>
            <div id="Services" className="mx-8">
              <Services />
            </div>
            <div id="Contact" className="mx-8">
              <Contact />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
