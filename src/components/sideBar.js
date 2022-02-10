//import React from 'react';

const SideBar = function(props) {
  
  return (
    <div className="flex flex-col p-1 mt-3 border rounded border-gray-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit mt-1.5 mb-2 xsm:pr-1 bg-gray-200 border-r-2 border-slate-50 hover:border-amber-300 hover:cursor-pointer hover:bg-amber-100 rounded-l transition ease-in-out delay-75">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <span className="hidden xsm:flex w-fit pr-1 text-xs xs:text-xs sm:text-sm font-medium sm:font-medium tracking-tight leading-tight text-indigo-600 self-center">
        <span className="font-thin xs:font-extralight sm:font-extralight md:font-light lg:font-normal text-slate-50"></span>My Cache</span>      
      </div>
      <div className="flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit mb-2 xsm:pr-1 bg-gray-200 border-r-2 border-slate-50 hover:border-amber-300 hover:cursor-pointer hover:bg-amber-100 rounded-l transition ease-in-out delay-75">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="hidden xsm:flex w-fit pr-1 text-xs xs:text-xs sm:text-sm font-medium sm:font-medium tracking-tight leading-tight text-indigo-600 self-center">
        <span className="font-thin xs:font-extralight sm:font-extralight md:font-light lg:font-normal text-slate-50"></span>Bookmarked</span>      
      </div>
      <div className="flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit mb-2 xsm:pr-1 bg-gray-200 border-r-2 border-slate-50 hover:border-amber-300 hover:cursor-pointer hover:bg-amber-100 rounded-l transition ease-in-out delay-75">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span className="hidden xsm:flex w-fit pr-1 text-xs xs:text-xs sm:text-sm font-medium sm:font-medium tracking-tight leading-tight text-indigo-600 self-center">
        <span className="font-thin xs:font-extralight sm:font-extralight md:font-light lg:font-normal text-slate-50"></span>Recent</span>      
      </div>
      <div className="flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit xsm:pr-1 bg-gray-200 border-r-2 border-slate-50 hover:border-amber-300 hover:cursor-pointer hover:bg-amber-100 rounded-l transition ease-in-out delay-75">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        <span className="hidden xsm:flex w-fit pr-1 text-xs xs:text-xs sm:text-sm font-medium sm:font-medium tracking-tight leading-tight text-indigo-600 self-center">
        <span className="font-thin xs:font-extralight sm:font-extralight md:font-light lg:font-normal text-slate-50"></span>Recycle Bin</span>      
      </div>
    </div>
  );
};

export default SideBar;