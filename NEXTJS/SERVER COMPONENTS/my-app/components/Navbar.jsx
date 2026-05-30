"use client";
import { useState } from "react";

import React from "react";

const Navbar = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default Navbar;
