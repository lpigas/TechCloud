import React from "react";
import Image from "next/image";
import Oferta from "./components/Oferta";
import CloudTech from "./components/CloudTech";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Footer({ left, top }) {
  const oferta = 4232 - top;
  return (
    <footer
      className={`absolute w-[1187px] h-[347px] left-[${left}px] top-[${top}px]`}
    >
      <div className={`left-[${left}px] top-[${top}px]`}>
        <Image src={"/image/logo1_1.png"} width={101} height={62} />
      </div>

      <div className={`absolute w-[173px] h-[91px] top-[257px]`}>
        <Oferta />
      </div>
      <div className="absolute left-[201px] top-0">
        <CloudTech />
      </div>
      <div className="absolute left-[504px] top-0">
        <Services />
      </div>
      <div className="absolute left-[911px] top-0">
        <Contact />
      </div>
    </footer>
  );
}
