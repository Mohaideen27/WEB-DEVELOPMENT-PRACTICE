import React from "react";

const whatsHappening = () => {
  return (
    <div className="border w-85 mx-auto rounded-2xl p-3 border-[#333333] mt-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-bold">Whats happening</h1>
        <ul className="flex flex-col gap-2">
          <li className=" flex justify-between">
            <div className="">
              <div className="flex flex-row gap-1 text-sm text-gray-500">
                <span>Business & finance</span>
                <span>•</span>
                <span>Trending</span>
              </div>
              <div className="text-lg font-semibold">
                <span>Operation Sindoor</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-lg text-gray-500 px-2">
              <div>•••</div>
            </div>
          </li>
          <li className=" flex justify-between">
            <div className="">
              <div className="flex flex-row gap-1 text-sm text-gray-500">
                <span>Trending in India</span>
                <span></span>
                <span></span>
              </div>
              <div className="text-lg font-semibold">
                <span>#JusticeForMickey</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-lg text-gray-500 px-2">
              <div>•••</div>
            </div>
          </li>
          <li className=" flex justify-between">
            <div className="">
              <div className="flex flex-row gap-1 text-sm text-gray-500">
                <span>Business & finance</span>
                <span>•</span>
                <span>Trending</span>
              </div>
              <div className="text-lg font-semibold">
                <span>#FIIFavouriteStock</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-lg text-gray-500 px-2">
              <div>•••</div>
            </div>
          </li>
          <li className=" flex justify-between">
            <div className="">
              <div className="flex flex-row gap-1 text-sm text-gray-500">
                <span>Trending in India</span>
                <span></span>
                <span></span>
              </div>
              <div className="text-lg font-semibold">
                <span>DRS Scam</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-lg text-gray-500 px-2">
              <div>•••</div>
            </div>
          </li>
        </ul>
        <div className=" text-blue-400">
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
};

export default whatsHappening;
