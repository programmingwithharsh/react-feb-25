import { createContext, useContext, useState } from "react";

/* 
With Context

username is Rishi

C1 -> C2 -> C3 -> C4 -> C5
"Rishi" -> C2 -> C3 -> C4 -> "Rishi"
*/

const UserContext = createContext(); // create context

const WithContext = () => {
    const [username, setUsername] = useState("Rishi");

    return (<>
        <h1>Without Context Example</h1>
        <div>In Component 1, username is {username}</div>
        <UserContext.Provider value={username}>
            <C2 />
        </UserContext.Provider>
    </>);
}

const C2 = () => {
    return (<>
        <C3 />
    </>);
}

const C3 = () => {
    return (<>
        <C4 />
    </>);
}

const C4 = () => {
    return (<>
        <C5 />
    </>);
}

const C5 = () => {
    const username = useContext(UserContext); // use context 
    return (<>
        <div>In Component 5, username is {username}</div>
    </>);
}

export default WithContext;