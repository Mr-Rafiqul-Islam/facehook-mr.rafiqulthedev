import React from "react";
import Avatar from "../../assets/images/avatars/avatar_1.png"
import EditIcon from "../../assets/icons/edit.svg"

const ProfileImage = () => {
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full"
        src={Avatar}
        alt="sumit saha"
      />
      <button className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80 cursor-pointer">
        <img src={EditIcon} alt="Edit" />
      </button>
    </div>
  );
};

export default ProfileImage;
