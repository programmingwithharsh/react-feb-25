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
        this.state = {
            username: "Rishi",
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake - Redux",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
        }
    }

    updateUsername = () => {
        this.setState({ // Update component state, whenever state update component rerender
            username: "Ravi"
        })
    }

    render() { // lifecycle
        console.log("This is render lifecycle - 2");
        console.log(this.state);
        return <div>
            <div>This is Main Class Component</div>
            <h1>Username state is {this.state.username}</h1>
            <button onClick={this.updateUsername}>Update Username</button>

            <table border="1">
                <thead>
                    <tr>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Product Description
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Rating
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.productName}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.starRating}</td>
                            </tr>
                        )
                        )
                    }

                </tbody>
            </table>

            <ProductList />
            <App />
            <Product />
            <Welcome />
            <AddProduct />
            <Title />
        </div>
    }
}