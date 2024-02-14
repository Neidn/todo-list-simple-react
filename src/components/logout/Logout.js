import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {TOKEN_KEY} from "../../config";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem(TOKEN_KEY);

        navigate("/signin");

    }, []);


    return null;
}

export default Logout;
