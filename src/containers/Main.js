import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import SignOut from "../components/signout/SignOut";
import SignInPage from "../pages/signin/SignInPage";
import SignUpPage from "../pages/signUp/SignUpPage";

import Error404 from "../pages/error/Error404";
import Error500 from "../pages/error/Error500";

import {TOKEN_KEY} from "../lib/config_key";
import {DEFAULT_URL, SIGN_IN_URL, SIGN_OUT_URL, SIGN_UP_URL, ERROR_500_URL} from "../lib/config_url";

const AuthRoute = ({element, auth}) => {
    return auth ? element : <Navigate replace to={SIGN_IN_URL}/>;
}

const SignInRoute = ({element, auth}) => {
    return !auth ? element : <Navigate replace to={DEFAULT_URL}/>;
}


const Main = (props) => {
    const token = localStorage.getItem(TOKEN_KEY);
    const auth = !!token;

    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route
                        path={DEFAULT_URL}
                        element={AuthRoute({element: <HomePage {...props}/>, auth: auth})}
                    />
                    <Route
                        path={SIGN_IN_URL}
                        element={<SignInRoute element={<SignInPage {...props}/>} auth={auth}/>}
                    />
                    <Route
                        path={SIGN_UP_URL}
                        element={<SignInRoute element={<SignUpPage {...props}/>} auth={auth}/>}
                    />
                    <Route
                        path={SIGN_OUT_URL}
                        element={<SignOut {...props} />}
                    />
                    <Route
                        path={ERROR_500_URL}
                        element={<Error500 {...props} />}
                    />
                    <Route
                        path={"*"}
                        element={<Error404 {...props} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Main;
