//import React from 'react';

const DocAndViewManipulator = function(props) {
    let tooltipTitle = props.cacheUsed*100/props.cacheSize + '% Cached (' + props.cacheUsed + '/' + props.cacheSize + 'GB)';
    let sortView = 'Sort Your View';
    let filter = 'Filter Files';
    let uploadFile = 'Upload File';
    return (
      <div className="flex justify-end w-full">
        <div className="hidden xs:flex flex-col h-7 sm:h-7 md:h-7 w-fit ml-2 mr-2 xsm:mr-4 xsl:mr-6 sm:mr-8 md:mr-10 lg:mr-12 hover:cursor-pointer justify-end rounded transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={tooltipTitle}>
          <div className="hidden xs:inline-flex w-fit py-1 text-gray-500 text-xs font-medium tracking-tighter">{props.cacheUsed*100/props.cacheSize}%&nbsp;<span className="hidden xss:inline-flex">Cached&nbsp;</span> <span className="hidden xsl:inline-flex">({props.cacheUsed}/{props.cacheSize}GB)</span></div>
          <div className="w-full bg-gray-200 h-1 mb-1">
            <div className="bg-green-500 h-1 w-1/4"></div>
            </div>
        </div>
        <div className="hidden xs:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-1 xsl:ml-2 md:ml-3 lg:ml-4 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={sortView}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
        </div>
        <div className="hidden xs:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-1 xsl:ml-2 md:ml-3 lg:ml-4 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={filter}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <div className="hidden xs:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-1 xsl:ml-2 md:ml-3 lg:ml-4 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={uploadFile}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>
      </div>
    );
  };
  
  DocAndViewManipulator.defaultProps = {
  cacheUsed: '2.50',
  cacheSize: '10.00'
};

  export default DocAndViewManipulator;