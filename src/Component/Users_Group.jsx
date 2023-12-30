
import userProfile from "../assets/message.png"
import { AnimatePresence, motion } from "framer-motion"

const Users_Group = () => {
    return (

        <AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    ease: 'anticipate',
                    duration: '0.2'
                }}
                className="bg-base-200 w-[70%] flex flex-col">
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
            </motion.div>
        </AnimatePresence>
    );
};

export default Users_Group;