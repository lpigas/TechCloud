import React, {useState} from "react";
import UploadButtons from "../../../../../components/atoms/Upload/Upload";
import Button from "../../../../../components/atoms/Buttons/Button";
import Loader from "../../../../../components/atoms/Loader/Loader";

export default function Qdd({
  uploadData,
  setUploadData,
  loadNewMessage,
  openLoader,
}) {
  const [isThatImage, setIsThatImage] = useState(true)
  return (
    <div className="px-2">
      <textarea
        type={"text-aria"}
        value={uploadData.text}
        className={`w-full p-4 overflow-x-scroll bg-[#FFFFFF] rounded-[15px]`}
        onChange={(e) => setUploadData({ ...uploadData, text: e.target.value })}
      ></textarea>
      <div className="mt-[42px] flex justify-between items-center">
        <UploadButtons uploadData={uploadData} setUploadData={setUploadData} isThatImage={isThatImage} setIsThatImage={setIsThatImage}/>
        {openLoader && <Loader />}
        <Button onClick={loadNewMessage} type={"static"} disabled={isThatImage !== true ? true : uploadData.text.length <= 0 ? true: false}>
          {" "}
          Отправить
        </Button>
      </div>
    </div>
  );
}
