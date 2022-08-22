import React, { useState } from "react";
import Header from "../components/layout/conponents/header/Header";
import Footer from "../components/layout/conponents/footer/Footer";
import TitleBlock from "../scenes/Services/Components/TitleBlock";
import FAQData from "../constants/Services/FAQData.json";
import FaqBlock from "../scenes/FAQ/FaqBlock";

export default function FAQ() {
  const data = FAQData.FAQ;
  const [opened, setOpened] = useState("");

  return (
    <>
      <div className="w-[1920px] h-[1462px]">
        <div
          id="Rectangle1"
          style={{
            background: "linear-gradient(90deg, #F6F8FC 0%, #ECF0FA 100%)",
          }}
          className="-[1920px] h-[1080px] from-[#90deg, #F6F8FC_0%, #ECF0FA_100%]"
        >
          <Header title={"FAQ"} />
          <div id="home__title" className="flex  w-[983px] h-[246px]">
            <TitleBlock partname={FAQData.FAQpartname} />
          </div>
          {data &&
            data.map((item) => (
              <div key={item.title} className="flex justify-center">
                <FaqBlock data={item} setOpened={setOpened} opened={opened} />
              </div>
            ))}
        </div>
        <div id="home__footer" className={` w-[1187px] h-[347px] m-auto`}>
          <Footer />
        </div>
      </div>
    </>
  );
}
