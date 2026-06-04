"use client";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <h1>About</h1>
        <p>Practicing style on module level in nextjs</p>
        <style jsx global>
          {`
            .container {
              background-color: red;
              color: black;
            }
          `}
        </style>
      </div>
      <div className="container">Hey this is anothe container</div>
    </div>
  );
};

export default About;
