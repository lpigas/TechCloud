import React, { useState } from "react";
import TitleBlock from "../scenes/Services/Components/TitleBlock";
import FAQData from "../constants/Services/FAQData.json";
import FaqBlock from "../scenes/FAQ/FaqBlock";
import Layout from "../components/layout/Layout";

export default function FAQ() {
  const data = FAQData.FAQ;
  const [opened, setOpened] = useState("");

  return (
    <Layout title={"FAQ"}>
      <div id="home__title" className="">
        <TitleBlock partname={FAQData.FAQpartname} />
      </div>
      <div className="mt-[31px] pb-8">
        {data &&
          data.map((item) => (
            <div key={item.title} className="flex justify-center">
              <FaqBlock data={item} setOpened={setOpened} opened={opened} />
            </div>
          ))}
      </div>
    </Layout>
  );
}
