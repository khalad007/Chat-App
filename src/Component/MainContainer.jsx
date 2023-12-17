import { useState } from "react";
import Sidebar from "./Sidebar";
import TextArea from "./TextArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import Login from "./Login";
import Users_Group from "./Users_Group";


const MainContainer = () => {
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
        <div className="h-[90vh] w-[90vw] mx-auto bg-base-200 flex">

            <Sidebar></Sidebar>
            {/* <TextArea props={conversations[0]}></TextArea> */}
            {/* <Welcome></Welcome> */}
            {/* <CreateGroup></CreateGroup> */}
            <Users_Group></Users_Group>
        </div>
    );
};

export default MainContainer;