import React from "react";
import {HiOutlinePaperClip} from "react-icons/hi";

import TodoCardContent from "../todoCardContent/TodoCardContent";
import TodoCardTitle from "../todoCardTitle/TodoCardTitle";
import TodoCardIcon from "../todoCardIcon/TodoCardIcon";
import TodoCardToggle from "../todoCardToggle/TodoCardToggle";

const TodoCard = ({id, title, content, is_done}) => {
    return (
        <div className="p-4 w-full h-full">
            <div className="flex rounded-lg h-full w-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                <div className="flex justify-between items-center mb-3">
                    <div className={"items-center flex justify-start"}>
                        <TodoCardIcon icon={<HiOutlinePaperClip/>}/>
                        <TodoCardTitle title={title}/>
                    </div>
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
