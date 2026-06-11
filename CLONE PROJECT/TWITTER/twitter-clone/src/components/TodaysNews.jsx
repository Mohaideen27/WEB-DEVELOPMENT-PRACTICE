import React from "react";

const TodaysNew = () => {
  return (
    <div className="border w-85 mx-auto rounded-2xl border-[#333333] p-4 mt-4">
      <div className="mb-4">
        <h1 className="font-bold text-xl">
          Todays News <span>cross icon</span>
        </h1>
      </div>
      <div className="newsContainer flex flex-col gap-4">
        <div className="">
          <div>
            Trump Makes history as first sitting president at NBA Finals Game 3
          </div>
          <div className="flex gap-2 text-gray-500">
            <div>imge</div>
            <div className="flex justify-around w-full">
              <span className="flex gap-1">
                <span>3 hours ago</span>
                <span>•</span>
              </span>
              <span className="flex gap-1">
                <span>News</span>
                <span>•</span>
              </span>

              <span>29.5K posts</span>
            </div>
          </div>
        </div>
        <div className="">
          <div>Trump Booed at NBA Finals as Spurs Beat Kninks 115-111</div>
          <div className="flex gap-2 text-gray-500">
            <div>imge</div>
            <div className="flex justify-around w-full">
              <span className="flex gap-1">
                <span>2 days ago</span>
                <span>•</span>
              </span>
              <span className="flex gap-1">
                <span>News</span>
                <span>•</span>
              </span>

              <span>1.4M posts</span>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            President Murmu Presents 51 Gallantry Awards to Brave Indian Heroes
          </div>
          <div className="flex gap-2 text-gray-500">
            <div>imge</div>
            <div className="flex justify-around w-full">
              <span className="flex gap-1">
                <span>23 hours ago</span>
                <span>•</span>
              </span>
              <span className="flex gap-1">
                <span>News</span>
                <span>•</span>
              </span>

              <span>33K posts</span>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default TodaysNew;
