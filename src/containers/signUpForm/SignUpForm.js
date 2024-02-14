import {useReducer} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

import SignInInput from "../../components/signInInput/SignInInput";
import SignInButton from "../../components/signinButton/SignInButton";
import SignInComment from "../../components/signInComment/SignInComment";
import {API_POST_SIGN_UP_URL} from "../../lib/config_user";
import {DEFAULT_URL} from "../../lib/config_url";

const initialState = {
    username: "",
    full_name: "",
    email: "",
    plain_password: "",
    repeat_plain_password: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "USERNAME":
            return {
                ...state,
                username: action.payload,
            }
        case "FULL_NAME":
            return {
                ...state,
                full_name: action.payload,
            }
        case "EMAIL":
            return {
                ...state,
                email: action.payload,
            }
        case "PLAIN_PASSWORD":
            return {
                ...state,
                plain_password: action.payload,
            }
        case "REPEAT_PLAIN_PASSWORD":
            return {
                ...state,
                repeat_plain_password: action.payload,
            }
        default:
            return state;
    }

}

const signUp = async (body) => {
    try {
        const response = await axios.post(API_POST_SIGN_UP_URL, body);

        console.log(response);

    } catch (error) {
        if (error.response.status === 400) {
            const msg = error.response.data.message ? error.response.data.message : "Sign Up failed";
            alert(msg);
        } else {
            alert("Server error");
        }
    }
}

const SignUpForm = () => {
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initialState, () => initialState);

    const onUserNameHandler = (event) => {
        dispatch({type: "USERNAME", payload: event.currentTarget.value});
    }

    const onFullNameHandler = (event) => {
        dispatch({type: "FULL_NAME", payload: event.currentTarget.value});
    }

    const onEmailHandler = (event) => {
        dispatch({type: "EMAIL", payload: event.currentTarget.value});
    }
    const onPasswordHandler = (event) => {
        dispatch({type: "PLAIN_PASSWORD", payload: event.currentTarget.value});
    }

    const onRepeatPasswordHandler = (event) => {
        dispatch({type: "REPEAT_PLAIN_PASSWORD", payload: event.currentTarget.value});
    }


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (state.plain_password !== state.repeat_plain_password) {
            alert("Password does not match");
            return;
        }

        const body = {
            username: state.username,
            email: state.email,
            full_name: state.full_name,
            plain_password: state.plain_password,
            repeat_plain_password: state.repeat_plain_password,
        }

        const response = await signUp(body);
        if (response) {

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
                            Sign Up to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <SignInInput
                                name={"username"}
                                head={"Your Name"}
                                type={"text"}
                                placeholder={"Tom"}
                                handler={onUserNameHandler}
                            />
                            <SignInInput
                                name={"full_name"}
                                head={"Full Name"}
                                type={"text"}
                                placeholder={"Tom Smith"}
                                handler={onFullNameHandler}
                            />
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

                            <SignInInput
                                name={"repeat_password"}
                                head={"Repeat Password"}
                                type={"password"}
                                placeholder={"********"}
                                handler={onRepeatPasswordHandler}
                            />

                            <SignInButton
                                type={"submit"}
                                text={"Sign in"}
                                onClick={onSubmitHandler}
                            />

                            <SignInComment
                                comment={"Do already have an account?"}
                                to={"/signin"}>
                                Sign In
                            </SignInComment>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SignUpForm;
