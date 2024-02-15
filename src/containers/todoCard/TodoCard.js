import React from "react";

import TodoCardContent from "../../components/todoCardContent/TodoCardContent";
import TodoCardTitle from "../../components/todoCardTitle/TodoCardTitle";
import TodoCardToggle from "../../components/todoCardToggle/TodoCardToggle";

const TodoCard = ({id, title, content, is_done}) => {
    return (
        <div className="p-4 w-full h-full">
            {/*<div className="p-4">*/}
            <div className="flex rounded-lg h-full w-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                <div className="flex justify-between items-center mb-3">

                    <TodoCardTitle title={title}/>
                    <TodoCardToggle
                        id={id}
                        onChangeHandler={() => {
                        }}
                        is_done={is_done}
                    />
                </div>

                <TodoCardContent content={content}/>
            </div>
        </div>


    );
}

export default TodoCard;
