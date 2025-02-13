import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const message = "Programming with Harsh";
const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];

// without JSX 
const element = React.createElement("h1", {}, "Programming with Harsh");
const element2 = React.createElement(
    "ul",
    {},
    flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// with JSX
const element3 = <h1>Programming with Harsh 2+2 is {2 + 2}</h1>;
const element4 = <ul>
    {
        flowers.map((item, index) => (
            <li key={index}>{item}</li>
        )
        )
    }
</ul>

root.render(
    element4
)

/*
Inside public/index.html file we have <div id="root"></div>
Diplay Programming with Harsh inside root element

<h1></h1>
*/