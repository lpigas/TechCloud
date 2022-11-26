import React, { useState } from "react";
import TitleBlock from "../components/moleculs/Title/TitleBlock";
import FAQData from "../constants/FAQ/FAQData.json";
import FaqBlock from "../scenes/FAQ/FaqBlock";
import Layout from "../components/layout/Layout";

export default function FAQ() {
  const data = FAQData.FAQ;
  const [opened, setOpened] = useState("");

  return (
    <Layout title={"FAQ"}>
      <TitleBlock partname={FAQData.FAQpartname} />
      <div className="mt-[31px] pb-8">
        {data &&
          data.map((item) => (
            <div key={item.title} className="flex justify-center">
              <FaqBlock FAQdata={item} setOpened={setOpened} opened={opened} />
            </div>
          ))}
      </div>
    </Layout>
  );
}
