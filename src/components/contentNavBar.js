//import React from 'react';
import AccountName from './accountName';
import DocAndViewManipulator from './docAndViewManipulator';
import SideBar from './sideBar';


const ContentNavBar = function(props) {
    return (
      <div className="block w-full">
      <div className="flex w-full pl-1 xsm:pl-2 sm:pl-4 md:pl-5 lg:pl-6 py-3">
        <AccountName />
        <DocAndViewManipulator />
      </div>
      <div className="block w-full min-h-[24rem] pl-1 xsm:pl-2 sm:pl-4 md:pl-5 lg:pl-6">
        <div className="block w-full min-h-[28rem] pl-1 xsm:pl-2 sm:pl-4 md:pl-5 lg:pl-6 py-3 border border-gray-300 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          
        </div>
      </div>
      </div>
    );
};
  
export default ContentNavBar;