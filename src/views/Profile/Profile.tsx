import React, { useRef } from "react";
import "./Profile.css";
import { useEffect, useState } from "react";

const Profile: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    <div className="profile">
      <div className="profile_top">
        <div className="profile_image">
          <form>
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
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
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
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </form>
        </div>
        <div className="profile_sections">
          {/* function in every p */}
          <p>My CV</p>
          <p>Applied jobs</p>
          <p>Saved jobs</p>
          <p>Following companies</p>
        </div>
      </div>
      <div className="section_info">
        {/* This section change with a fuction */}
      </div>
    </div>
  );
};

export default Profile;
