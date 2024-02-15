import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import Page from "../../containers/Page";
import TodoList from "../../containers/todoList/TodoList";
import TodoAddForm from "../../components/todoAddForm/TodoAddForm";
import {todoActions} from "../../store/slice/todoSlice";
import {TOKEN_KEY} from "../../lib/config_key";
import {API_GET_UNDONE_TODOS_URL} from "../../lib/config";
import {SIGN_OUT_URL} from "../../lib/config_url";

const getTodos = async (url, navigate) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const headers = {
        'Authorization': `${token}`
    };

    try {
        const response = await axios.get(
            url,
            {headers: headers},
        );
        if (response.status !== 200) {
            alert("Failed to get todos");
            return;
        }
        return response.data;
    } catch (error) {
        console.log('error', error);
        if (error.response.status === 400) {
            alert("Failed to get todos");
        } else if (error.response.status === 401) {
            navigate(SIGN_OUT_URL, {replace: true});
            alert("Unauthorized")
        } else {
            alert("Server error");
        }
    }
}

const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getTodos(API_GET_UNDONE_TODOS_URL, navigate)
            .then((data) => {
                dispatch(todoActions.setTodos(data));
            }).catch((error) => {
            console.log(error);
        });

    }, [dispatch, navigate]);

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
