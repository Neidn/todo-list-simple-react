import React from "react";

const TodoCardContent = ({content}) => {
    return (
        <div className="flex justify-between flex-grow">
            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                {content}
            </p>
        </div>
    );
}

export default TodoCardContent;
