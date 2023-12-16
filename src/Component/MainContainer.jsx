import Sidebar from "./Sidebar";
import TextArea from "./TextArea";


const MainContainer = () => {
    return (
        <div className="h-[90vh] w-[90vw] mx-auto bg-white flex">
         
            <Sidebar></Sidebar>
            <TextArea></TextArea>
        </div>
    );
};

export default MainContainer;