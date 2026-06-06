// 27.50

import "./App.css";
// import "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="flex w-[80vw] bg-black text-white mx-auto">
        <div className="first w-full">
          <div className="logo w-1/2 flex justify-end">
            <svg
              className="px-8 py-4 h-20 invert"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path>
              </g>
            </svg>
          </div>
          <div className="sidebar">
            <ul className="flex flex-col text-xl space-y-3 p-5 w-1/2">
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">Home</span>
                Home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket</span>home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket_launch</span>home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket_launch</span>home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket_launch</span>home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket_launch</span>home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket_launch</span>home
              </li>
              <li className="flex gap-3 justify-end items-center">
                <span class="material-symbols-outlined">rocket_launch</span>home
              </li>
            </ul>
          </div>
        </div>
        <div className="second w-full border-x-[0.5px] border-gray-500">
          dsff
        </div>
        <div className="third w-full">dsffds</div>
      </div>
    </>
  );
}

export default App;
