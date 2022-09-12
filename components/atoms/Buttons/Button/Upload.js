import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function Upload({ uploadData, setUploadData }) {
  const [imageSrc, setImageSrc] = useState();
  const classes = useStyles();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    if (changeEvent) {
      const reader = new FileReader();

      reader.onload = function (onLoadEvent) {
        setImageSrc(onLoadEvent.target.result);
      };

      reader.readAsDataURL(changeEvent.target.files[0]);
      handleOnSubmit(changeEvent);
    }
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dzix3j1li/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const datas = await data.json();

    setImageSrc(datas.secure_url);
  }
  useEffect(() => {
    setUploadData({ img: imageSrc, text: uploadData.text });
  }, [imageSrc]);

  return (
    <div>
      <form method="post" onChange={handleOnChange}>
        <input
          className="w-4/6 m-4"
          hidden
          type="file"
          id="contained-button-file"
          name="file"
        />
      </form>
      <label htmlFor="contained-button-file" className="flex">
        <img src="/image/Arrows/attach.svg" />
        {uploadData.img ? (
          <img
            src={uploadData.img}
            className="mx-6"
            width={"45px"}
            height={45}
          />
        ) : (
          "Прикрепить файл"
        )}
      </label>
    </div>
  );
}
