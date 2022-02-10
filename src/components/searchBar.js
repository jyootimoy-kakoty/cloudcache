//import React from 'react';
//import cloudCacheLogo from "../cloudCacheLogo.JPG"

const SearchBar = function(props) {
    return (
      <div className="h-7 sm:h-7 md:h-7 lg:h-8 w-fit flex content-start">
        {/*<img src={cloudCacheLogo} alt={"cloudCacheLogo"} style={{width: "50px"}}/>*/}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-5 md:h-5 lg:h-6 w-auto relative left-4 lg:left-5 stroke-indigo-600 rounded bg-amber-300 self-center z-20" fill="none" viewBox="0 0 24 24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <input id="searchBar" name="searchBar" type="searchBar" required className="appearance-none w-24 xs:w-44 xss:w-48 xsm:w-52 xsl:w-60 sm:w-72 md:w-80 lg:w-96 pl-7 xsl:pl-8 lg:pl-10 pr-3 py-2 -ml-2 border border-gray-300 placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs md:text-sm rounded" placeholder="Search Your Cache!"></input> 
      </div>
    );
  };
  
  export default SearchBar;