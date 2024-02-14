import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

import SignInInput from "../../components/signInInput/SignInInput";
import SignInButton from "../../components/signinButton/SignInButton";
import {API_GET_SIGN_IN_URL, DEFAULT_SCOPE, TOKEN_KEY} from "../../config";

const signIn = async (body) => {
    try {
        const response = await axios.postForm(API_GET_SIGN_IN_URL, body);

        if (response.status !== 201) {
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

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const body = {
            username: Email,
            password: Password,
            scope: DEFAULT_SCOPE,
        }

        const response = await signIn(body);

        if (response) {
            localStorage.setItem(TOKEN_KEY, response.token);

            navigate("/");
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

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?&nbsp;
                                <Link to={"/signup"}
                                      className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default SignInForm;
