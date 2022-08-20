import React from "react";
import Image from "next/image";
import Oferta from "./components/Oferta";
import CloudTech from "./components/CloudTech";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Footer({ left, top }) {
  return (
    <footer className="flex w-full">
      <div className="flex flex-col w-[101px] justify-between">
        <Image src={"/image/logo1_1.png"} width={101} height={62} />
        <Oferta />
      </div>
      <div className="flex w-full justify-center">
      <div id="AboutUs" className="">
        <CloudTech />
      </div>
      <div id="Services" className="">
        <Services />
      </div>
      <div id="Contact" className="">
        <Contact />
      </div>
      </div>

    </footer>
  );
}
