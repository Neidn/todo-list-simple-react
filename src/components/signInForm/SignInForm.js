import {useReducer} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import SignInInput from "../signInInput/SignInInput";
import SignInButton from "../signinButton/SignInButton";
import {DEFAULT_SCOPE} from "../../lib/config";
import {TOKEN_KEY} from "../../lib/config_key";
import {API_POST_SIGN_IN_URL} from "../../lib/config_user";
import {DEFAULT_URL} from "../../lib/config_url";
import SignInComment from "../signInComment/SignInComment";

const initialState = {
    email: "",
    password: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "EMAIL":
            return {
                ...state,
                email: action.payload,
            }
        case "PASSWORD":
            return {
                ...state,
                password: action.payload,
            }
        default:
            return state;
    }
}

const signIn = async (body) => {
    try {
        const response = await axios.postForm(API_POST_SIGN_IN_URL, body);

        if (response.status !== 201) {
            alert("Sign in failed");
            return;
        }

        if (!response.data.access_token || !response.data.token_type) {
            alert("Sign in failed");
            return;
        }

        return {
            token: response.data.access_token,
            token_type: response.data.token_type,
        }
    } catch (error) {
        if (error.response.status === 400) {
            alert("Sign in failed");
        } else {
            alert("Server error");
        }
    }
}

const SignInForm = () => {
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        () => initialState
    );

    const onEmailHandler = (event) => {
        dispatch({
            type: "EMAIL",
            payload: event.currentTarget.value
        });
    }
    const onPasswordHandler = (event) => {
        dispatch({
            type: "PASSWORD",
            payload: event.currentTarget.value
        });
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const body = {
            username: state.email,
            password: state.password,
            scope: DEFAULT_SCOPE,
        }

        const response = await signIn(body);

        if (response) {
            const token = `${response.token_type} ${response.token}`;
            localStorage.setItem(TOKEN_KEY, token);

            navigate(DEFAULT_URL, {replace: true});
        }

    }

    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <SignInInput
                                name={"email"}
                                head={"Your Email"}
                                type={"email"}
                                placeholder={"name@company.com"}
                                handler={onEmailHandler}
                            />
                            <SignInInput
                                name={"password"}
                                head={"Password"}
                                type={"password"}
                                placeholder={"********"}
                                handler={onPasswordHandler}
                            />

                            <SignInButton
                                type={"submit"}
                                text={"Sign in"}
                                onClick={onSubmitHandler}
                            />
                            <SignInComment
                                comment={"Don’t have an account yet?"}
                                to={"/signup"}>
                                Sign up
                            </SignInComment>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SignInForm;
