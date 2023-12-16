import React from 'react';
import { MdDoneOutline } from 'react-icons/md';

const CreateGroup = () => {
    return (
       
            <div className='flex flex-[70%] justify-between items-center px-9'>
                <input className='h-12 rounded-lg w-full' type="text" placeholder='Enter The Group Name' />
                <button className='btn btn-accent text-white'><MdDoneOutline></MdDoneOutline></button>
            </div>
        
    );
};

export default CreateGroup;