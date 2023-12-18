
import userProfile from "../assets/message.png"
const Users_Group = () => {
    return (
        <div className="bg-base-200 w-[70%] flex flex-col">
            {/* header  */}
            <div className='bg-white rounded-md px-1 m-1 flex  items-center gap-x-3 shadow-xl'>
                <img className="w-10 h-10" src={userProfile} alt="" />
                <h1>Online USER</h1>
            </div>


            <div className='bg-white rounded-md px-1 m-1 flex flex-col flex-1 '>

                {/* <div className="flex flex-col"> */}
                    <div className='bg-white rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl'>
                        <img className="w-10 h-10" src={userProfile} alt="" />
                        <h1>Hello</h1>
                    </div>
                    <div className='bg-white rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl'>
                        <img className="w-10 h-10" src={userProfile} alt="" />
                        <h1>Hello</h1>
                    </div>
                    <div className='bg-white rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl'>
                        <img className="w-10 h-10" src={userProfile} alt="" />
                        <h1>Hello</h1>
                    </div>
                {/* </div> */}

            </div>
        </div>
    );
};

export default Users_Group;