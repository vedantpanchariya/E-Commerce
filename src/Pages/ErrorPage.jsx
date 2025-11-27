import {Link} from "react-router"

const ErrorPage = () => {
    return(
        <div>
            <h1>Oh no, This route doesn't exist.</h1>
            <Link to="/">
                You Can Go Back To Home Page By Clicking Here ,though!
            </Link>
        </div>
    )
}

export default ErrorPage;