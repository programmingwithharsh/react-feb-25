import { useState, useEffect } from "react";

const UseCustomHook = (url) => {
    const [data, setData] = useState([]); // data is empty array
    /*
        data is empty array
        setData we use to update data
    */ 
    useEffect(() => {
        fetch(url, { // by default Promise, async call
            method: "GET"
        })
            .then((response) => response.json()) // json format
            .then((items) => {
                setData(items) // updating state
            })
    }, []) // effect will run once
    return [data]
}

export default UseCustomHook;