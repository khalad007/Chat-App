import { useState } from "react";
// import messageImg from "../assets/message.png"

import { MdAccountCircle, MdAddCircle, MdGroupAdd, MdNightlight, MdPersonAdd, MdSearch } from "react-icons/md";
import SingleMessageItem from "./SingleMessageItem";
const Sidebar = () => {
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
    return (
        <div className='bg-base-200 w-[30%] flex flex-col'>
            {/* header  */}
            <div className='bg-white rounded-md py-2 px-1 m-1 flex justify-between'>
                <div>
                    <button className='btn btn-xs'><MdAccountCircle></MdAccountCircle></button>
                </div>


                <div>
                    <button className='btn btn-xs ml-1'><MdPersonAdd></MdPersonAdd></button>
                    <button className='btn btn-xs ml-1'><MdGroupAdd></MdGroupAdd></button>
                    <button className='btn btn-xs ml-1'><MdAddCircle></MdAddCircle></button>
                    <button className='btn btn-xs ml-1'><MdNightlight></MdNightlight></button>
                </div>
            </div>

            {/* search bar  */}
            <div className='flex items-center bg-white rounded-md py-2 px-1 m-1'>
                <button className='btn btn-xs bg-white shadow-none outline-none border-none '>
                    <MdSearch></MdSearch>
                </button>
                <input className='border-none outline-0 ml-3' type="text" placeholder='Search' />
            </div>
            <div className='bg-white rounded-md py-2 px-1 m-1 flex-1 overflow-x-scroll overflow-y-scroll'>


                <table className="table">
                    {/* head */}
                    {/* <thead>
                            <tr>
                                <th>Name</th>
                                <th>Job</th>
                            </tr>
                        </thead> */}
                    <tbody>
                        {/* row 1 */}
                       {
                        conversations.map((conversation) =>{
                            return <SingleMessageItem conversation={conversation} key={conversation.name}></SingleMessageItem>
                        })
                       }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Sidebar;