import { useRouteError, Link } from "react-router-dom"


function ErrorPage() {
    const error = useRouteError()
    console.error(error);
    return (
        <div className="flex flex-col items-center ">
            <h1 className="font-bold text-lg">
                Oh no !! 😭
            </h1>
            <br />
            <p>
                Sorry, an Unexpected Error has occured
            </p>
            <i>{error.statusText || error.message}</i>
            <br />
            <Link to='/' >
                Go back Home
            </Link>
        </div>
    )
}

export default ErrorPage
