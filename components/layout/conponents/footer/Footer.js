import React from "react";
import Image from "next/image";
import Oferta from "./components/Oferta";
import CloudTech from "./components/CloudTech";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Footer({ left, top }) {
  return (
    <footer>
      <div>
        <Image src={"/image/logo1_1.png"} width={101} height={62} />
      </div>

      <div id="Oferta" className={`absolute w-[173px] h-[91px] top-[257px]`}>
        <Oferta />
      </div>
      <div id="AboutUs" className="absolute left-[201px] top-0">
        <CloudTech />
      </div>
      <div id="Services" className="absolute left-[504px] top-0">
        <Services />
      </div>
      <div id="Contact" className="absolute left-[911px] top-0">
        <Contact />
      </div>
    </footer>
  );
}
