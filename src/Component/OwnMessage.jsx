

const OwnMessage = () => {
    var props2 = {name: "You", message: "template message "}
    return (
        <div className="flex justify-end  text-black ">
            <div className="flex flex-col bg-[#A6E8D3] rounded-lg w-max m-1 p-3">
                <p>{props2.message}</p>
                <p className="text-end">12:00pm</p>
            </div>
        </div>
    );
};

export default OwnMessage;