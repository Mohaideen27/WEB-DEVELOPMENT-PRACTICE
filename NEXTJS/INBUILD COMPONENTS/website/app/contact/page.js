import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <div>
      <Script>{`
      alert("Welcome to contact page")`}</Script>
      I am contact page
    </div>
  );
};

export default page;
export const metadata = {
  title: "Contact",
  description: "practicing NextJS",
};
