import { FaTrashCan } from "react-icons/fa6";
import { MdSend } from "react-icons/md";

const TextArea = () => {
    
    return (
        <div className='bg-base-200 w-[70%] flex flex-col'>
            {/* header  */}
            <div className='bg-white rounded-md py-2 px-1 m-1 flex justify-between'>
                <p></p>
                <div>
                    <p></p>
                    <p></p>
                </div>
                <button className="text-red-600 btn btn-xs">
                    <FaTrashCan></FaTrashCan>
                </button>
            </div>


            <div className='flex-1 rounded-md py-2 px-1 m-1 bg-white'>Main Body</div>
            <div className=' rounded-md py-2 px-1 m-1 bg-white flex justify-between'>
                <input type="text" placeholder="Type Your Message " />
                <button className='btn btn-xs ml-1 '><MdSend></MdSend></button>
            </div>
        </div>
    );
};

export default TextArea;