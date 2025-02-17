import Acccordion from "./Accordion";
import Alerts from "./Alerts";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Pagination from "./Pagination";
import Progress from "./Progress";
import Spinners from "./Spinners";

function Bootstrap() {
    return (<div className="m-2">
        <h1>Carousel Example</h1>
        <Carousel />
        <h1>Acccordion Example</h1>
        <Acccordion />
        <h1>Alerts Example</h1>
        <Alerts />
        <h1>Cards Example</h1>
        <Cards />
        <h1>Pagination Example</h1>
        <Pagination />
        <h1>Progress Example</h1>
        <Progress />
        <h1>Spinners Example</h1>
        <Spinners />
    </div>);
}

export default Bootstrap;