//import React from 'react';

const Account = function(props) {
    let tooltipTitle = props.cacheUsed*100/props.cacheSize + '% Cached (' + props.cacheUsed + '/' + props.cacheSize + 'GB)';
    let information = 'Information';
    let settings = 'Settings';
    let notification = 'Notifications';
    let accountDetails = 'Account Details';
    let menu = 'Menu';
    return (
      <div className="flex justify-end w-full">
        {/*<div className="hidden xsl:flex flex-col h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-4 mr-2 lg:mr-4 hover:cursor-pointer justify-end rounded transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={tooltipTitle}>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-green-500 h-1 w-1/4"></div>
            <div className="hidden mdl:inline-flex w-fit text-gray-500 text-xs font-medium tracking-tighter">{props.cacheUsed*100/props.cacheSize}% Cached <span className="hidden lg:inline-flex">({props.cacheUsed}/{props.cacheSize}GB)</span></div>
          </div>
    </div>*/}
        <div className="hidden xsl:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-2 md:ml-3 lg:ml-4 pb-1 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={information}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="hidden xsl:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-2 md:ml-3 lg:ml-4 pb-1 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={settings}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div className="hidden xsl:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-2 md:ml-3 lg:ml-4 pb-1 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={notification}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <div className="hidden xsl:flex h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-2 md:ml-3 lg:ml-4 pb-1 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start hover:cursor-pointer justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={accountDetails}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <div className="flex xsl:hidden h-7 sm:h-7 md:h-7 lg:h-8 w-fit ml-2 md:ml-3 lg:ml-4 border-b-2 border-slate-50 hover:border-amber-300 hover:self-start justify-end hover:bg-amber-100 rounded-t transition ease-in-out delay-75" data-bs-toggle="tooltip" data-bs-placement="bottom" title={menu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 sm:h-6 md:h-7 w-auto stroke-indigo-600 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    );
  };
  
Account.defaultProps = {
  cacheUsed: '2.50',
  cacheSize: '10.00'
};

  export default Account;