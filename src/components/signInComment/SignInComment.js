import {Link} from "react-router-dom";

const SignInComment = ({to, comment, children}) => {
    return (
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            {comment}
            &nbsp;
            <Link to={to}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                {children}
            </Link>
        </p>
    );
}

export default SignInComment;
