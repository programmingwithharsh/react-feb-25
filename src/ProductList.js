import { Link } from 'react-router-dom';

export default function ProductList(props) {
    console.log("ProductList Component Props is ", props);
    return <div className="m-4">
        <h1>Product List Functional Component</h1>
        <div className="table-responsive">
            <table border="1" className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Product Code
                        </th>
                        <th>
                            Release Date
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
                        props.products.map((product, index) => (
                            <tr key={index}>
                                <td><img src={product.imageUrl} width="50" height="50" /></td>
                                <td><Link to={`/productDetail/${product.productId}`}>{product.productName}</Link></td>
                                <td>{product.productCode}</td>
                                <td>{product.releaseDate}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.starRating}</td>
                            </tr>
                        )
                        )
                    }

                </tbody>
            </table>
        </div>
    </div>
}