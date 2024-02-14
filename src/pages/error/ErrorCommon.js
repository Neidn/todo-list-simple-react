import {Link} from "react-router-dom";

const ErrorCommon = () =>
    (
        <div className="mt-4 text-center">
            <p className="text-gray-600 mb-3">Or, you might want to explore:</p>
            <Link to={"/"} className="text-blue-500 hover:underline">Homepage</Link>
        </div>
    )

export default ErrorCommon
