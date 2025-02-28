import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            address: "Mumbai"
        }
        console.log("constructor"); // Mounting
    }

    componentWillUnmount() {
        console.log("componentWillUnmount"); // Unmounting
    }

    /*
    static getDerivedStateFromProps(props, state) { // update state from props
        return {
            address: props.address
        }
    }
    */

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before Update " + prevState.address;
        return true;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "After Update " + this.state.address;
    }

    updateAddress = () => {
        this.setState({
            address: "Delhi"
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const productName = event.target.elements.productName.value;
        const imageUrl = event.target.elements.imageUrl.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const starRating = event.target.elements.starRating.value;

        const product = {
            productId: Number(new Date()),
            productName: productName,
            imageUrl: imageUrl,
            productCode: productCode,
            releaseDate: releaseDate,
            description: description,
            price: price,
            starRating: starRating
        }

        if (!productName) {
            alert("Pleaes enter product name");
        } else {
            this.setState({
                redirect: true
            })
        }
        this.props.onAddProduct(product); // calling Main addProduct function
    }

    render() {
        const { redirect } = this.state;

        return (<>
            <div className="row">
                {
                    redirect && (
                        <Navigate to="/products" />
                    )
                }
            </div>
            <div className="row">
                <div className="col-xxl-3" ></div>
                <div className="col-xxl-6" >
                    <h1>Add Product</h1>
                    <h2>Address is {this.state.address}</h2>

                    <div id="div1"></div>
                    <div id="div2"></div>

                    <button className="btn btn-primary mt-2" onClick={this.updateAddress}>Update Address</button>

                    <form onSubmit={this.handleSubmit} noValidate>
                        Product name <input className="form-control" type="text" placeholder="Enter product name" name="productName" />
                        Image Url <input className="form-control" type="text" placeholder="Enter image url" name="imageUrl" />
                        Product Code <input className="form-control" type="text" placeholder="Enter product code" name="productCode" />
                        Date <input className="form-control" type="date" name="releaseDate" />
                        Description <input className="form-control" type="text" placeholder="Enter description" name="description" />
                        Price <input className="form-control" type="text" placeholder="Enter Price" name="price" />
                        Rating <input className="form-control" type="text" placeholder="Enter Rating" name="starRating" />
                        <input type="submit" value="Add Product" className="btn btn-primary mt-2" />
                    </form>
                    <Link to="/products" className="btn btn-primary mt-2">Navigate to Products</Link>
                </div>
                <div className="col-xxl-3" ></div>
            </div>
        </>);
    }
}

export default AddProduct;