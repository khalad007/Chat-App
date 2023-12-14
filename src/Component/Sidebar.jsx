import React from 'react';
import { MdAccountCircle, MdAddCircle, MdGroupAdd, MdNightlight, MdPersonAdd, MdSearch } from "react-icons/md";
const Sidebar = () => {
    return (
        <div className='bg-base-200 w-[30%] flex flex-col'>
            {/* header  */}
            <div className='bg-white rounded-md py-2 px-1 m-1 flex justify-between'>
                <div>
                    <button className='btn btn-xs'><MdAccountCircle></MdAccountCircle></button>
                </div>


                <div>
                    <button className='btn btn-xs ml-1'><MdPersonAdd></MdPersonAdd></button>
                    <button className='btn btn-xs ml-1'><MdGroupAdd></MdGroupAdd></button>
                    <button className='btn btn-xs ml-1'><MdAddCircle></MdAddCircle></button>
                    <button className='btn btn-xs ml-1'><MdNightlight></MdNightlight></button>
                </div>
            </div>

            {/* search bar  */}
            <div className='flex items-center bg-white rounded-md py-2 px-1 m-1'>
                <button className='btn btn-xs bg-white shadow-none outline-none border-none '>
                    <MdSearch></MdSearch>
                </button>
                <input className='border-none outline-0 ml-3' type="text" placeholder='Search' />
            </div>
            <div className='bg-white rounded-md py-2 px-1 m-1 flex-1'>
                conversation
            </div>
        </div>
    );
};

export default Sidebar;