import CarouselExample from './CarouselExample';
import AccordionExample from './AccordionExample';
import AlertsExample from './AlertsExample';
import CardsExample from './CardsExample';
import PaginationExample from './PaginationExample';
import ProgressExample from './ProgressExample';
import SpinnersExample from './SpinnersExample';

const ReactBootstrap = () => {
    return (<div className="m-2">
        <h1>Carousel Example using React Bootstrap Module</h1>
        <CarouselExample />
        <h1>Acccordion Example</h1>
        <AccordionExample />
        <h1>Alerts Example</h1>
        <AlertsExample />
        <h1>Cards Example</h1>
        <CardsExample />
        <h1>Pagination Example</h1>
        <PaginationExample />
        <h1>Progress Example</h1>
        <ProgressExample />
        <h1>Spinners Example</h1>
        <SpinnersExample />
    </div>);
}

export default ReactBootstrap;