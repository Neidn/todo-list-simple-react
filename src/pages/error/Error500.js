import ErrorCommon from "./ErrorCommon";

const Error500 = () =>
    (
        <div className="flex flex-col bg-gray-50 items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">500 - Internal Server Error</h1>
            <p className="text-gray-600">Sorry, something went wrong. Please try again later.</p>

            <ErrorCommon/>
        </div>
    );
export default Error500
