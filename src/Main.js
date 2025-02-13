import React from 'react';
import ProductList from './ProductList';
import App from './App';
import Product from './Product';
import Welcome from './Welcome';
import AddProduct from './AddProduct';
import Title from './Title';
// import { Title1, Title2, Title3, Title4 } from './Title';

export default class Main extends React.Component {  // class component
    constructor() {
        super();
        console.log("This is constructor lifecycle - 1");
    }

    render() { // lifecycle
        console.log("This is render lifecycle - 2");
        return <div>
            <div>This is Main Class Component</div>
            <ProductList />
            <App />
            <Product />
            <Welcome />
            <AddProduct />
            <Title />
        </div>
    }
}