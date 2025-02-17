import { useParams } from 'react-router-dom';

function ProductDetail() {
    let { productid } = useParams();

    return (<>
        This is Product Detail Page - {productid}
    </>);
}

export default ProductDetail;