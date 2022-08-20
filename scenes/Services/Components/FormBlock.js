import React from "react";
import ServicesForms from "../../../components/moleculs/Forms/ServicesForms";

export default function FormBlock() {
  // console.log(formData)
  return (
    <>
      <div className={`absolute top-[378px] left-[368px]`}>
        <ServicesForms
          title={"ИТ Консалтинг"}
          color={"violet"}
          imageRound={"/image/Form/Logos/consalting_1.svg"}
          bigImage={"/image/Form/bigImage/consaltingB.png"}
          url={''}
        />
      </div>
      <div className={`absolute top-[378px] left-[974px]`}>
        <ServicesForms
          title={"ИТ Аутсорсинг (удаленно)"}
          color={"orange"}
          imageRound={"/image/Form/Logos/outsorc_1.svg"}
          bigImage={"/image/Form/bigImage/outsorc.png"}
          url={''}
        />
      </div>
      <div className={`absolute top-[812px] left-[368px]`}>
        <ServicesForms
          title={"Аренда выделенных серверов"}
          color={"blue"}
          imageRound={"/image/Form/Logos/servers.svg"}
          bigImage={"/image/Form/bigImage/servers.png"}
          url={''}
        />
      </div>
      <div className={`absolute top-[812px] left-[974px]`}>
        <ServicesForms
          title={"Облачный сервер"}
          color={"lightblue"}
          imageRound={"/image/Form/Logos/cloud.svg"}
          bigImage={"/image/Form/bigImage/clouds.png"}
          url={'/Services/Cloudserver'}
        />
      </div>
      <div className={`absolute top-[1248px] left-[368px]`}>
        <ServicesForms
          title={"Кибербезопасность"}
          color={"pink"}
          imageRound={"/image/Form/Logos/security.svg"}
          bigImage={"/image/Form/bigImage/security.png"}
          url={''}
        />
      </div>
      <div className={`absolute top-[1248px] left-[974px]`}>
        <ServicesForms
          title={"Автоматизация бизнес задач под ваши нужды"}
          color={"violet"}
          imageRound={"/image/Form/Logos/automatic_1.svg"}
          bigImage={"/image/Form/bigImage/automatic.png"}
          url={''}
        />
      </div>
      <div className={`absolute top-[1684px] left-[368px]`}>
        <ServicesForms
          title={"Продажа софта по безопасности"}
          color={"orange"}
          imageRound={"/image/Form/Logos/soft_1.svg"}
          bigImage={"/image/Form/bigImage/soft.png"}
          url={''}
        />
      </div>
      <div className={`absolute top-[1684px] left-[974px]`}>
        <ServicesForms
          title={"Продажа подписок на облачный софт"}
          color={"blue"}
          imageRound={"/image/Form/Logos/cloud-soft_1.svg"}
          bigImage={"/image/Form/bigImage/cloud_soft.png"}
          url={''}
        />
      </div>
    </>
  );
}
