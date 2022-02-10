//import React from 'react';
//import cloudCacheLogo from "../cloudCacheLogo.JPG"

const Logo = function(props) {
  return (
    <div className="h-5 sm:h-6 md:h-7 lg:h-8 w-fit flex justify-start self-center rounded bg-amber-300 shadow-xl transition ease-in-out delay-300">
      {/*<img src={cloudCacheLogo} alt={"cloudCacheLogo"} style={{width: "50px"}}/>*/}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 lg:h-8 w-auto fill-indigo-600 self-center" viewBox="0 0 20 20" fill="none">
        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
        <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
      </svg>
      <span className="hidden xss:flex pr-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-medium md:font-medium lg:font-semibold tracking-tight leading-tight self-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
        <span className="font-thin xs:font-extralight sm:font-extralight md:font-light lg:font-normal bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Cloud</span>Cache
      </span>      
    </div>
  );
};

export default Logo;