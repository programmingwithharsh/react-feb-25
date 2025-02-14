function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="./LoginSuccessful.html" method="get">
                Email <input type="text" name="email" />
                Password <input type="text" name="password" />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;