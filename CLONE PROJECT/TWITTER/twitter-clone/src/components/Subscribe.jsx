import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="mainArea">
        <div className="content flex-col border py-3 w-85 rounded-2xl border-[#333333]">
          <h3>Subscribe to Premium</h3>
          <p className="">
            Get rid of ads, see your analytics, boost your replies and unlock
            20+ features.
          </p>
          <button
            className="bg-sky-400 rounded-3xl px-3"
            suppressHydrationWarning={true}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
