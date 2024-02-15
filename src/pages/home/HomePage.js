import React from "react";

import Page from "../../containers/Page";
import TodoList from "../../components/todoList/TodoList";
import TodoAddForm from "../../containers/todoAddForm/TodoAddForm";

const HomePage = () => {

    return (
        <>
            <Page>
                <div className={"w-full"}>
                    <TodoAddForm/>
                    <TodoList/>
                </div>
            </Page>
        </>
    );
};
export default HomePage;
