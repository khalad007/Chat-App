import { useState } from "react";
// import messageImg from "../assets/message.png"

import { MdAccountCircle, MdAddCircle, MdGroupAdd, MdNightlight, MdPersonAdd, MdSearch, MdSunny } from "react-icons/md";
import SingleMessageItem from "./SingleMessageItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
const Sidebar = () => {
    const dispatch = useDispatch();
    const lightTheme = useSelector((state) => state.themeKey)
    // const [lightTheme, setLightTheme] = useState(true);
    // console.log(useSelector((state) => state.themeKey))

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
        <div className={`bg-base-200 w-[30%] flex flex-col ${lightTheme ? '' : 'bg-gray-400'} hole-sidebar`}>
            {/* header  */}
            {/* <div className={`bg-white rounded-md py-2 px-1 m-1 flex justify-between ${lightTheme ? '' : 'bg-gray-400'}`}> */}
            <div className={`bg-base-100 rounded-md py-2 px-1 m-1 flex justify-between ${lightTheme ? '' : 'bg-gray-400'} header-section`}>
                <div>
                    <button className='btn btn-xs'><MdAccountCircle></MdAccountCircle></button>
                </div>

                <div>
                    <Link to="users">
                        <button className='btn btn-xs ml-1'><MdPersonAdd></MdPersonAdd></button>
                    </Link>
                    <Link to="groups">
                        <button className='btn btn-xs ml-1'><MdGroupAdd></MdGroupAdd></button>
                    </Link>
                    <Link to="create-group">
                        <button className='btn btn-xs ml-1'><MdAddCircle></MdAddCircle></button>
                    </Link>

                    <button className='btn btn-xs ml-1' onClick={() => { dispatch(toggleTheme()) }}>
                        {lightTheme ? <MdNightlight /> : <MdSunny />}
                    </button>
                </div>
            </div>

            {/* search bar  */}
            <div className={`flex items-center bg-base-100 rounded-md py-2 px-1 m-1 ${lightTheme ? '' : 'bg-gray-400'} conversation-list`}>
                <button className='btn btn-xs bg-base-100 shadow-none outline-none border-none '>
                    <MdSearch></MdSearch>
                </button>
                <input className='border-none rounded-lg outline-0 ml-3' type="text" placeholder='Search' />
            </div>


            <style>
                {`
                    @media (max-width: 640px) {
                        .conversation-list {
                            display: none;
                        }
                        .header-section {
                            height: 100%;
                            
                            flex-direction: column;
                            justify-content: flex-evenly;
                        }
                        .hole-sidebar {
                            width: min-content;
                        }
                       
                    }
                `}
            </style>

            {/* conversation section  */}
            <div className={`bg-base-100  rounded-md py-2 px-1 m-1 flex-1 overflow-x-scroll overflow-y-scroll ${lightTheme ? '' : 'bg-gray-400'} conversation-list`}>


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
                            conversations.map((conversation) => {
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