import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie List</Link>
        </div>
    )
}
export default NavBar