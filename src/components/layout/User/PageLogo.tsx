import React from "react";

const PageLogo: React.FC = () => {
  return (
    <>
      <div className=" justify-center gap-4 mt-10 md:mb-20 text-2xl md:text-xl font-bold text-center text-white flex">
        <span className="ml-7">FakeFlix</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="pink"
          className="w-6 h-6 fill-current text-primary"
        >
          <path
            strokeLinecap="round"
            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>
    </>
  );
};

export default PageLogo;
