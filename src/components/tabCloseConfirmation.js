import React from 'react';

const confirmation = function() {
    window.onbeforeunload = function (e) {
        e = e || window.event;

        // For IE and Firefox prior to version 4
        if (e) {
            e.returnValue = 'Sure?';
        }

        // For Safari
        return 'Sure?';
    };
}

function ConfirmTabClosure(props) {
    return (
        <div className="card">
            {/*<div className="contentBody">
                {props.children}
            </div>*/}
            <div>
                {confirmation()}
            </div>
        </div>
    );
  }
  
export default ConfirmTabClosure;