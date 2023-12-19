
import { useSelector } from "react-redux";
import userProfile from "../assets/message.png"

const Groups = () => {
    const lightTheme = useSelector((state) => state.themeKey)
    return (
        <div className="bg-base-200 w-[70%] flex flex-col">
            {/* header  */}
            <div className={`bg-base-100 rounded-md px-1 m-1 flex  items-center gap-x-3 shadow-xl ${lightTheme ? '' : 'bg-gray-400'}`}>
                <img className="w-10 h-10" src={userProfile} alt="" />
                <h1>Available Groups</h1>
            </div>


            <div className={`bg-base-100 rounded-md px-1 m-1 flex flex-col flex-1 overflow-scroll ${lightTheme ? '' : 'bg-gray-400'}`}>

                {/* <div className="flex flex-col"> */}
                <div className={`bg-base-100 rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl ${lightTheme ? '' : 'bg-gray-400'}`}>
                    <img className="w-10 h-10" src={userProfile} alt="" />
                    <h1>Hello</h1>
                </div>
                <div className={`bg-base-100 rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl ${lightTheme ? '' : 'bg-gray-400'}`}>
                    <img className="w-10 h-10" src={userProfile} alt="" />
                    <h1>Hello</h1>
                </div>
                <div className={`bg-base-100 rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl ${lightTheme ? '' : 'bg-gray-400'}`}>
                    <img className="w-10 h-10" src={userProfile} alt="" />
                    <h1>Hello</h1>
                </div>
                {/* </div> */}

            </div>
        </div>
    );
};

export default Groups;