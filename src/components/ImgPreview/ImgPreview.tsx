import React, { useRef } from "react";
import "./ImgPreview.css";
import { useEffect, useState } from "react";

const ImgPreview: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  return (
    <div className="imgpreview">
      <h2>img preview</h2>
      {/* <form>
        {preview ? (
          <img
            src={preview}
            style={{ objectFit: "cover" }}
            onClick={() => {
              setImage(null);
            }}
          />
        ) : (
          <button
            onClick={(event: React.SyntheticEvent) => {
              event.preventDefault();
              fileInputRef.current?.click();
            }}
          >
            Add Image
          </button>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event: React.ChangeEvent) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </form> */}
    </div>
  );
};

export default ImgPreview;
