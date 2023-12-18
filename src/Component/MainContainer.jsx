import { useState } from "react";
import Sidebar from "./Sidebar";
import TextArea from "./TextArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import Login from "./Login";
import Users_Group from "./Users_Group";
import { Outlet } from "react-router-dom";


const MainContainer = () => {
   
    return (
        <div className="h-[90vh] w-[90vw] mx-auto bg-base-200 flex">

            <Sidebar></Sidebar>
            <Outlet></Outlet>
            {/* <TextArea props={conversations[0]}></TextArea> */}
            {/* <Welcome></Welcome> */}
            {/* <CreateGroup></CreateGroup> */}
            {/* <Users_Group></Users_Group> */}
        </div>
    );
};

export default MainContainer;