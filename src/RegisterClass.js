import React from 'react';

class RegisterClass extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const fullname = event.target.elements.fullname.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        if (fullname == "") {
            alert("Enter Fullname");
        } else if (email == "") {
            alert("Enter Email");
        }
        else if (password == "") {
            alert("Enter Password");
        }

        let user = {
            fullname: fullname,
            email: email,
            password: password
        };

        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

        users.push(user); // add item inside array

        let usersString = JSON.stringify(users); // convert object into string
        localStorage.setItem("users", usersString) // set item in local storage, key and value pair
    }

    render() {
        return (<div>
            <h1>Register</h1>
            <form action="./RegisterSuccessful.html" method="get" onSubmit={this.handleSubmit}>
                Fullname <input type="text" placeholder='Enter fullname' id="fullname" name="fullname" /><br />
                Email <input type="text" placeholder='Enter email' id="email" name="email" /><br />
                Password <input type="password" placeholder='Enter password' id="password" name="password" /><br />
                Confirm Password <input type="password" placeholder='Enter confirm password' id="confirmPassword" name="confirmPassword" /><br />
                <button>Register</button>
            </form>
        </div>);
    }
}

export default RegisterClass;