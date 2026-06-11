import React from "react";

import Image from "next/image";
import AkshayPic from "../assets/Akshay.avif";

const WhoToFollow = () => {
  return (
    <div>
      <div className="border border-[#333333] rounded-2xl mx-auto w-85 mt-4 p-4">
        <div>
          <div className="font-bold text-xl">
            <h1>Who to follow</h1>
          </div>
          <div>
            <ul className="flex flex-col gap-1 my-4">
              <li>
                <div className="flex cursor-pointer">
                  <div className="flex items-center p-2">
                    <Image
                      src={AkshayPic}
                      className="rounded-full w-10 h-10 object-none"
                      alt="profile_pic"
                    ></Image>
                  </div>
                  <div className="flex justify-between w-full mx-3">
                    <div className="flex-col justify-start">
                      <a href="#">
                        <div>
                          <span>Aksay Kumar</span>
                          <span>tick</span>
                        </div>
                      </a>
                      <div className="font-thin">@akshaykumar</div>
                    </div>
                    <div className="flex items-center">
                      <button className="border px-4 py-1 rounded-full text-black bg-white font-bold">
                        <div>follow</div>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex cursor-pointer">
                  <div className="flex items-center p-2">
                    <Image
                      src={AkshayPic}
                      className="rounded-full w-10 h-10 object-none"
                      alt="profile_pic"
                    ></Image>
                  </div>
                  <div className="flex justify-between w-full mx-3">
                    <div className="flex-col justify-start">
                      <a href="#">
                        <div>
                          <span>Aksay Kumar</span>
                          <span>tick</span>
                        </div>
                      </a>
                      <div className="font-thin">@akshaykumar</div>
                    </div>
                    <div className="flex items-center">
                      <button className="border px-4 py-1 rounded-full text-black bg-white font-bold">
                        <div>follow</div>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex cursor-pointer">
                  <div className="flex items-center p-2">
                    <Image
                      src={AkshayPic}
                      className="rounded-full w-10 h-10 object-none"
                      alt="profile_pic"
                    ></Image>
                  </div>
                  <div className="flex justify-between w-full mx-3">
                    <div className="flex-col justify-start">
                      <a href="#">
                        <div>
                          <span>Aksay Kumar</span>
                          <span>tick</span>
                        </div>
                      </a>
                      <div className="font-thin">@akshaykumar</div>
                    </div>
                    <div className="flex items-center">
                      <button className="border px-4 py-1 rounded-full text-black bg-white font-bold">
                        <div>follow</div>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <button>
                <span className="text-blue-500">Show more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <hr className="my-2 w-[90%] border border-[#333333]" />
      </div>
    </div>
  );
};

export default WhoToFollow;
