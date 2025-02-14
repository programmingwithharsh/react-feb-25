function Register() {
    return (<div>
        <h1>Register</h1>
        <form action="./RegisterSuccessful.html" method="get">
            Fullname <input type="text" id="fullname" />
            Email <input type="text" id="email" />
            Password <input type="text" id="password" />
            Confirm Password <input type="text" id="confirmPassword" />
            <button>Register</button>
        </form>
    </div>);
}

export default Register;