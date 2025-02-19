import Product from './Product';

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
                            <Product key={index} product={product} />
                        )
                        )
                    }

                </tbody>
            </table>
        </div>
    </div>
}