import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams, Redirect } from 'react-router-dom'; // Redirect for invalid product
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    // Get all product data
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    
    // Find the product with the given ID
    const product = all_product.find((e) => e.id === Number(productId));

    // If no product is found, return an error message or redirect
    if (!product) {
        return <div>Product not found!</div>; // Or you can redirect to a 404 page, or show a different component
        // Alternatively, you can use the Redirect component from react-router-dom:
        // return <Redirect to="/404" />;
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
};

export default Product;
