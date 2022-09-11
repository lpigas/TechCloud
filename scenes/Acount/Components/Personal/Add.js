import React, { useState } from "react";
import UploadButtons from "../../../../components/atoms/Buttons/Button/Upload";
import Button from "../../../../components/atoms/Buttons/Button/Button";

export default function Qdd({ uploadData, setUploadData, loadNewMessage }) {
  return (
    <div>
      <textarea
        type={"text-aria"}
        value={uploadData.text}
        className={`w-[770px] min-h-[80px] p-4 overflow-x-scroll bg-[#FFFFFF] rounded-[15px]`}
        onChange={(e) => setUploadData({ ...uploadData, text: e.target.value })}
      ></textarea>
      <div className="mt-[42px] flex justify-between items-center">
        <UploadButtons uploadData={uploadData} setUploadData={setUploadData} />
        <Button onClick={loadNewMessage} type={"Static"}>
          {" "}
          Отправить
        </Button>
      </div>
    </div>
  );
}
