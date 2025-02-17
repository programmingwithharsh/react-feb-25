import { Link, Outlet } from 'react-router-dom';

// Home | AddProduct | Products | Title | Register | Bootstrap
function Nav() {
    return (<>
        <nav>
            <Link to="/">Home</Link>|
            <Link to="/addproduct">AddProduct</Link>|
            <Link to="/products">Products</Link>|
            <Link to="/title">Title</Link>|
            <Link to="/app">App</Link>|
            <Link to="/users">Users</Link>|
            <Link to="/register">Register</Link>|
            <Link to="/login">Login</Link>
        </nav>
        <div>
            <Outlet />
        </div>
    </>);
}

export default Nav;