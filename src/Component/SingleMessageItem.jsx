import React from 'react';

const SingleMessageItem = ({ conversation }) => {
    console.log(conversation)
    return (
        
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-10 h-10">
                                <img src={conversation.photoURL} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{conversation.name}</div>
                            <div className="text-sm opacity-50">{conversation.lastMessage}</div>
                        </div>
                    </div>
                </td>
                <td className="text-xs">{conversation.timeStamp}</td>
            </tr>
        
    );
};

export default SingleMessageItem;