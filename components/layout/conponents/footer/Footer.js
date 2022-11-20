import React from "react";
import servicesData from "../../../../constants/About/dataul.json";
import Oferta from "./components/Oferta";
import CloudTech from "./components/CloudTech";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Footer({}) {
  const data = servicesData.services;

  return (
    <div
      id="home__footer"
      className={`mt-[120px] w-full p-4 flex items-center justify-center text-center m-auto  `}
    >
      <footer className="flex m-auto mb-[34px] w-full  max-w-[1487px]">
        <div className="w-full flex lg:px-24 m-auto flex-col lg:flex-row ">
          <div className="flex flex-col sm:pb-12 xl:pb-0 justify-between">
            <img src={"/image/logo1_1.png"} width={100} height={100} />
            <Oferta />
          </div>
          <div className="flex w-full  lg:flex-row sm:flex-col sm:justify-center  lg:justify-center lg:items-start">
            <div id="AboutUs" className="xl:mx-12 ">
              <CloudTech />
            </div>
            <div id="Services" className="xl:mx-12">
              <Services data={data} />
            </div>
            <div id="Contact" className="xl:mx-12 ">
              <Contact />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
