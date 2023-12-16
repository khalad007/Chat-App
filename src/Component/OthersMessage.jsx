import React from 'react';

const OthersMessage = () => {
    var props1 = {name: "Random User", message: "template message "}
    return (
        <div className="flex  text-black ">
            <div className="flex flex-col bg-base-200 rounded-lg w-max m-1 p-3">
                <p>{props1.name}</p>
                <p>{props1.message}</p>
                <p className="text-end">12:00pm</p>
            </div>
        </div>
    );
};

export default OthersMessage;