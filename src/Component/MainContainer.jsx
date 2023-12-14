import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";


const MainContainer = () => {
    return (
        <div className="h-[90vh] w-[90vw] mx-auto bg-white flex">
         
            <Sidebar></Sidebar>
            <WorkArea></WorkArea>
        </div>
    );
};

export default MainContainer;