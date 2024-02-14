import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import TodoList from "../../components/todoList/TodoList";
import Page from "../../containers/Page";

import {TOKEN_KEY} from "../../config";

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);

        console.log(token);

        if (!token) {
            navigate("/login");
        }
    }, []);

    return (
        <>
            <Page>
                <TodoList/>
            </Page>
        </>
    );
};
export default HomePage;
