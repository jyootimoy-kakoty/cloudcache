//import React from 'react';

const AccountName = function(props) {
    return (
        <div className="inline-block h-6 sm:h-7 md:h-7 lg:h-8 w-fit justify-start self-start bg-gray-200 hover:cursor-pointer hover:bg-amber-100 rounded transition ease-in-out delay-75">
          <span className="px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium sm:font-medium md:font-medium lg:font-semibold tracking-tight leading-tight text-indigo-600 self-center">
            <span className="font-thin xs:font-extralight sm:font-extralight md:font-light lg:font-normal text-amber-500">{props.fName}</span>{props.lName}
          </span>      
        </div>
    );
};

AccountName.defaultProps = {
    fName: 'Jyootimoy',
    lName: 'Kakoty'
  };

export default AccountName;