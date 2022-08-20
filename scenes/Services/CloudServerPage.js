import Header from "../../components/layout/conponents/header/Header";
import Footer from "../../components/layout/conponents/footer/Footer";
import Head from "next/head";
import React from "react";
import TitleBlock from "./Components/TitleBlock";
import Bottom from "../../components/moleculs/Recall/Bottom";
import { useRouter } from "next/router";
import CenterCloud from "./CloudServer/CenterCloud";
import servicesData from '../../constants/Services/servicesData.json';

export default function CloudServerPage({message}) {
    console.log(message)
    const router = useRouter()
    const fullData = servicesData.cloudserver

    
    return (
    <>
    <Head>
    <title>Services askdjajskdjj</title>
  </Head>
  <div
    className="w-[1920px] h-[3005px]"
    style={{
      background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
    }}
  >
    <div id="hServices__cloudServer--header" className="absolute left-[368px] top-[-4px]">
      <Header />
    </div>
   <TitleBlock partname={fullData.partname}/>

    <div className="absolute top-[2335px] left-[367px]">
    <Bottom title={'Нужна помощь?'} buttonName={'Оставить заявку'} />
    </div>
    <CenterCloud data={fullData}/>
  </div>

  <div
    id="Services__cloudServer--footer"
    className={`m-auto w-[1187px] h-[347px] flex flex-row mt-[123px] mb-[43px]`}
  >
    <Footer />
  </div>
  </>
  )
}

