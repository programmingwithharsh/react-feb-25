import { useState } from "react";

function Register2() {
    const [inputs, setInputs] = useState({}); // inputs is empty object by default

    const handleChange = (event) => { // calling on on change
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value })); // update state
        console.log(inputs);
    }

    const submit = (event) => { // on form submit
        event.preventDefault(); // don't refresh page
        alert("Form is submitted");
        console.log(inputs);
        if (inputs.name == "") {
            alert("Please enter name");
        }
    }

    return (<>
        <h1>Register page</h1>
        <div className="col-xxl-6">
            <form onSubmit={submit}>
                Enter Name: <input type="text" name="name" className="form-control" value={inputs.name || ""} onChange={handleChange} />
                Enter Password: <input name="password" type="password" className="form-control" value={inputs.password || ""} onChange={handleChange} />
                Enter Email: <input name="email" type="email" className="form-control" value={inputs.email || ""} onChange={handleChange} />
                <input className="btn btn-primary mt-2" type="submit" value="Register" />
            </form>
        </div>
    </>);
}

export default Register2;