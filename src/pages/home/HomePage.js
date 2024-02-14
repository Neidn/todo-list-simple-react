import React from "react";

import TodoList from "../../components/todoList/TodoList";
import Page from "../../containers/Page";

const HomePage = () => {

    return (
        <>
            <Page>
                <TodoList/>
            </Page>
        </>
    );
};
export default HomePage;
