import React from "react";

import Image from "next/image";
import AkshayPic from "../assets/Akshay.avif";

const WhoToFollow = () => {
  return (
    <div>
      <div>
        <h1>Who to follow</h1>
      </div>
      <div>
        <ul>
          <li>
            <div className="flex border">
              <div className="border flex items-center p-2">
                <Image
                  src={AkshayPic}
                  className="rounded-full w-10 h-10 object-none"
                  alt="profile_pic"
                ></Image>
              </div>
              <div className="border flex justify-between w-full mx-3">
                <div className="border flex-col justify-start">
                  <a href="#">
                    <div>
                      <span>Aksay Kumar</span>
                      <span>tick</span>
                    </div>
                  </a>
                  <div className="font-thin">@akshaykumar</div>
                </div>
                <div className="border flex items-center">
                  <button className="border px-4 py-1 rounded-full text-black bg-white font-bold">
                    <div>follow</div>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhoToFollow;
