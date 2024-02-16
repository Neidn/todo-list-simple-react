import {useNavigate} from "react-router-dom";

import {TOKEN_KEY} from "../../lib/config_key";
import {SIGN_IN_URL} from "../../lib/config_url";

const SignOut = () => {
    const navigate = useNavigate();

    localStorage.removeItem(TOKEN_KEY);

    navigate(SIGN_IN_URL, {replace: true});

    return null;
}

export default SignOut;
