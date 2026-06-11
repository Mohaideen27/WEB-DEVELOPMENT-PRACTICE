import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="mainArea flex-col border w-85 rounded-2xl border-[#333333] mx-auto">
        <div className="content m-3 flex-col flex gap-3">
          <h3 className="text-lg font-bold">Subscribe to Premium</h3>
          <p className="">
            Get rid of ads, see your analytics, boost your replies and unlock
            20+ features.
          </p>
          <button
            className="bg-sky-400 rounded-3xl px-3 py-1 text-sm font-bold w-32"
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
