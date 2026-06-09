import React from "react";

const TodaysNew = () => {
  return (
    <div className="border">
      <div className="border">
        <h1 className="font-bold text-xl">
          Todays News <span>cross icon</span>
        </h1>
      </div>
      <div className="newsContainer">
        <div className="border">
          <div>
            Trump Makes history as first sitting president at NBA Finals Game 3
          </div>
          <div className="flex gap-2">
            <div>imge</div>
            <div>
              <span>3 hours ago</span>
              <span>News</span>
              <span>29.5K posts</span>
            </div>
          </div>
        </div>
        <div>
          <div>Trump Booed at NBA Finals as Spurs Beat Kninks 115-111</div>
          <div className="flex gap-2">
            <div>imge</div>
            <div>
              <span>2 days ago</span>
              <span>News</span>
              <span>1.4M posts</span>
            </div>
          </div>
        </div>
        <div className="border">
          <div>
            President Murmu Presents 51 Gallantry Awards to Brave Indian Heroes
          </div>
          <div className="flex gap-2 text-gray-500">
            <div>imge</div>
            <div>
              <span>23 hours ago</span>
              <span>News</span>
              <span>33K posts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysNew;
