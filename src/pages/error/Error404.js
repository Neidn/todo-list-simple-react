import ErrorCommon from "./ErrorCommon";

const Error404 = () =>
    (
        <div className="flex flex-col bg-gray-50 items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
            <p className="text-gray-600">Sorry, the page you're looking for doesn't exist.</p>

            <ErrorCommon/>
        </div>
    );
export default Error404
