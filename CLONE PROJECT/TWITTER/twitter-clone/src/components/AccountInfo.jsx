import React from "react";
import Image from "next/image";
import ProfilePic from "../assets/Profile.jpeg";
const AccountInfo = () => {
  return (
    <div className="accountInfo flex px-3 rounded-full border border-transparent mx-2 cursor-pointer hover:border-[#333333] hover:bg-[#333333]">
      <div className="avatar w-10">
        <Image
          src={ProfilePic}
          width={50}
          height={50}
          className="rounded-full"
          alt="profile_pic"
        ></Image>
      </div>
      <div className="info flex flex-nowrap overflow-hidden px-2 w-40">
        <div className="name">MOHAMED MOHAIDEEN</div>
        <div className="id">@KNOWN_AS_SAMEER</div>
      </div>
      <div className="more w-12 flex justify-start px-4">
        <span className="material-symbols-outlined">pending</span>
      </div>
    </div>
  );
};
export default AccountInfo;
