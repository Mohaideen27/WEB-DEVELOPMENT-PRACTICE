import React from "react";

const whatsHappening = () => {
  return (
    <div className="border">
      <h1 className="border">Whats happening</h1>
      <ul>
        <li className="border flex">
          <div className="w-[90%]">
            <div>
              Business & finance <span>Trending</span>
            </div>
            <div>Operation Sindoor</div>
          </div>
          <div className="flex items-start justify-center text-4xl">
            <div>...</div>
          </div>
        </li>
        <li className="border flex">
          <div className="w-[90%]">
            <div>
              Trending in India <span></span>
            </div>
            <div>#JusticeForMickey</div>
          </div>
          <div className="">
            <div className="flex items-start justify-center text-4xl">
              <div>...</div>
            </div>
          </div>
        </li>
        <li className="border flex">
          <div className="w-[90%]">
            <div>
              Business & Finance <span>Trending</span>
            </div>
            <div>#FIIFavouriteStock</div>
          </div>
          <div className="flex items-start justify-center text-4xl">
            <div>...</div>
          </div>
        </li>
        <li className="border flex">
          <div className="w-[90%]">
            <div>
              Trending in India <span></span>
            </div>
            <div>DRS Scam</div>
          </div>
          <div className="flex items-start justify-center text-4xl">
            <div>...</div>
          </div>
        </li>
      </ul>
      <div className="border">
        <span>Show more</span>
      </div>
    </div>
  );
};

export default whatsHappening;
