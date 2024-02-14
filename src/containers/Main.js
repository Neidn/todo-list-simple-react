import {Route, Routes, BrowserRouter} from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import SignInPage from "../pages/signin/SignInPage";


import Error404 from "../pages/error/Error404";
import Error500 from "../pages/error/Error500";

const Main = (props) => {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route
                        path={"/"}
                        exact
                        element={<HomePage {...props} />}
                    />
                    <Route
                        path={"/signin"}
                        exact
                        element={<SignInPage {...props} />}
                    />
                    <Route
                        path={"/error500"}
                        excat
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
