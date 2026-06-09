import React from "react";
import Image from "next/image";
import ProfilePic from "../assets/Profile.jpeg";
const AccountInfo = () => {
  return (
    <div className="accountInfo flex m-2 w-60 justify-end">
      <div className="avatar w-10">
        <Image
          src={ProfilePic}
          width={50}
          height={50}
          alt="profile_pic"
        ></Image>
      </div>
      <div className="info w-37">
        <div className="name">MOHAMED MOHAIDEEN</div>
        <div className="id">@KNOWN_AS_SAMEER</div>
      </div>
      <div className="more w-8 flex justify-end">
        <span className="material-symbols-outlined">pending</span>
      </div>
    </div>
  );
};
export default AccountInfo;
