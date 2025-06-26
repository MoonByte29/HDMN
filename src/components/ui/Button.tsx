import React from "react";


const Button: React.FC = () => {
  return (
    <button className="cursor-pointer relative bg-white py-4 px-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-primary-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
      <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
        <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]" />
        <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-primary-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-blue-800">
          <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              height="100%"
              width="100%"
            >
              <path
                fill="currentColor"
                d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="pl-[3.4rem] font-semibold pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black">
        Explore Service
      </div>
    </button>
  );
};

export default Button;
