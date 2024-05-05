import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const ImageSlide = ({ imageUrl }) => {
  const [imageIdx, setImageIdx] = useState(0);

  const handleClick = (direction) => {
    if (direction === "next") {
      setImageIdx((imageIdx + 1) % imageUrl.length);
    } else if (direction === "back") {
      setImageIdx((imageIdx - 1 + imageUrl.length) % imageUrl.length);
    }
  };

  return (
    <div className="w-[75%] h-[30rem] bg-black relative mt-5">
      <button
        className="absolute top-1/2 bottom-1/2 left-10 text-4xl"
        onClick={() => handleClick("back")}
      >
        <FaChevronLeft className=" text-white" />
      </button>
      <div class="absolute top-0 left-0 w-full h-14 custom-gradient flex justify-end items-end pr-10 gap-5">
        <IoShareSocialOutline className="text-white w-8 h-8" />
        <CiHeart className="text-white w-8 h-8" />
      </div>
      <img
        className="w-full h-full object-contain"
        src={imageUrl[imageIdx]}
        alt=""
      />
      <button
        className="absolute top-1/2 bottom-1/2 right-10 text-4xl"
        onClick={() => handleClick("next")}
      >
        <FaChevronRight className="text-white text-4xl" />
      </button>
    </div>
  );
};

export default ImageSlide;
