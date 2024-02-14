import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import TodoList from "../../components/todoList/TodoList";
import Page from "../../containers/Page";

import {TOKEN_KEY} from "../../config";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Page>
                <TodoList/>
            </Page>
        </>
    );
};
export default HomePage;
