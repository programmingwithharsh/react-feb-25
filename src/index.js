import ReactDOM from 'react-dom/client';
import Main from './Main'; // importing Main class component
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const root = ReactDOM.createRoot(document.getElementById("root"));

const username = "Ruchee"; // string
const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]; // array 
const data = { // object 
    place: "Mumbai",
    pin: 400065
}

const users = [
    {
        id: 1,
        name: "Text User",
        email: "textuser@gmail.com"
    },
    {
        id: 2,
        name: "Anne Hunter",
        email: "annehunter@mail.com"
    },
    {
        id: 3,
        name: "Jale Boser",
        email: "jale@yahoo.com"
    }
];

root.render(
    <Main username={username} flowers={flowers} data={data} users={users} />
)
