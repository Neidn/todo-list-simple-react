import React from "react";

const TodoCardIcon = ({icon}) => {
    return (
        <div
            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
            {icon}
        </div>
    );
}

export default TodoCardIcon;
