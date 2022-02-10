//import React from 'react';

const CloudCacheApps = function(props) {
    let cloudCacheApps = 'Cloud Cache Apps';
    return (
      <div className="hidden xsm:flex h-7 sm:h-7 md:h-7 w-fit ml-6 md:ml-7 lg:ml-8 pb-1 justify-start self-center border-b-2 border-slate-50 hover:border-amber-300 hover:cursor-pointer hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={cloudCacheApps}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      </div>
    );
  };
  
  export default CloudCacheApps;