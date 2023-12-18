import { FaTrashCan } from "react-icons/fa6";
import { MdSend } from "react-icons/md";
import OthersMessage from "./OthersMessage";
import OwnMessage from "./OwnMessage";
import { useState } from "react";

const TextArea = () => {
    const [conversations, setConversations] = useState([
        {
            name: 'John Doe',
            lastMessage: 'Hello there!',
            timeStamp: new Date().toISOString(),
            photoURL: "https://i.postimg.cc/MKGy63x2/message.png"
        },
        {
            name: 'Alice Smith',
            lastMessage: 'How are you?',
            timeStamp: new Date().toISOString(),
            photoURL: "https://i.postimg.cc/MKGy63x2/message.png"
        },
        {
            name: 'Bob Johnson',
            lastMessage: 'Ill be there in 5 minutes.',
            timeStamp: new Date().toISOString(),
            photoURL: "https://i.postimg.cc/MKGy63x2/message.png"
        },
    ]
    )
    var props = conversations[0];

    return (
        <div className='bg-base-200 w-[70%] flex flex-col'>
            {/* header  */}
            <div className='bg-white rounded-md px-1 m-1 flex justify-between'>

                <div>
                    <p className="text-base font-semibold">{props.name}</p>
                    <p className="text-xs">{props.timeStamp}</p>
                </div>
                <div className="flex items-center">
                    <button className="text-red-600 btn btn-xs">
                        <FaTrashCan></FaTrashCan>
                    </button>
                </div>
            </div>

            {/* main body  */}
            <div className='flex-1 rounded-md py-2 px-1 m-1 bg-white overflow-y-scroll' >

                <OthersMessage></OthersMessage>
                <OwnMessage></OwnMessage>
                <OthersMessage></OthersMessage>
                <OwnMessage></OwnMessage>
                <OthersMessage></OthersMessage>
                <OwnMessage></OwnMessage>

            </div>

            {/* footer  */}
            <div className=' rounded-md py-2 px-1 m-1 bg-white flex justify-between'>
                <input type="text" placeholder="Type Your Message " />
                <button className='btn btn-xs ml-1 '><MdSend></MdSend></button>
            </div>
        </div>
    );
};

export default TextArea;