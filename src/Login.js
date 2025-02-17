import Nav from "./Nav";
import { useNavigate } from 'react-router-dom'; // Step 1

function Login() {
    const navigate = useNavigate(); // Step 2

    const gotToProducts = () => {
        navigate("/products"); // Step 3 Navigate it
    }

    return (
        <div>
            <Nav />
            <h1>Login</h1>
            <form action="./LoginSuccessful" method="get">
                Email <input type="text" name="email" />
                Password <input type="text" name="password" />
                <button className="btn btn-primary">Login</button>
            </form>
            <button className="btn btn-primary" onClick={gotToProducts}>Navigate to Products</button>
        </div>
    );
}

export default Login;