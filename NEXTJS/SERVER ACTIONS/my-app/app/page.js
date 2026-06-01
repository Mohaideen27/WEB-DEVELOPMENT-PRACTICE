"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef();
  return (
    <div className="w-2/3 mx-auto my-30">
      <form ref={ref} action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            className="text-black bg-white"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input
            name="add"
            id="add"
            className="text-black bg-white"
            type="text"
          />
        </div>
        <button className="cursor-pointer border-2 p-1 mx-auto">Submit</button>
      </form>
    </div>
  );
}
