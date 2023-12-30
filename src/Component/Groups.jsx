
import { useSelector } from "react-redux";
import userProfile from "../assets/message.png"
import { AnimatePresence, motion } from "framer-motion"

const Groups = () => {
    const lightTheme = useSelector((state) => state.themeKey)
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
                <div className={`bg-base-100 rounded-md px-1 m-1 flex  items-center gap-x-3 shadow-xl ${lightTheme ? '' : 'bg-gray-400'}`}>
                    <img className="w-10 h-10" src={userProfile} alt="" />
                    <h1>Available Groups</h1>
                </div>


                <div className={`bg-base-100 rounded-md px-1 m-1 flex flex-col flex-1 overflow-scroll ${lightTheme ? '' : 'bg-gray-400'}`}>

                    {/* <div className="flex flex-col"> */}
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={`bg-base-100 rounded-md px-1 m-1 flex items-center gap-x-3 hover:bg-slate-400 shadow-xl ${lightTheme ? '' : 'bg-gray-400'}`}>
                        <img className="w-10 h-10" src={userProfile} alt="" />
                        <h1>Hello</h1>
                    </motion.div>

                    {/* </div> */}

                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Groups;