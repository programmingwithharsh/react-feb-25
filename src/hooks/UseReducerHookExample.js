import { useReducer } from "react";

const reducer = (state, action) => { // which update state based on action
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return 0;

        default:
            return state;
    }
}

function UseReducerHookExample() {
    const [count, dispatch] = useReducer(reducer); // intial count is 0

    return (<>
        <h1>Use Reducer Hook Example</h1>
        <h2>Count is {count}</h2>

        <button className="btn btn-primary m-2" onClick={() => dispatch("increment")}>Increment</button>
        <button className="btn btn-primary m-2" onClick={() => dispatch("decrement")}>Decrement</button>
        <button className="btn btn-primary m-2" onClick={() => dispatch("reset")}>Reset</button>

    </>);
}

export default UseReducerHookExample;