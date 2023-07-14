"use client"
import fs from 'fs'
import path from 'path';
import { useState } from 'react';

const ProductPage = (props) => {
    const [productData, setProductData] = useState();
    
    const productPriceHandler = async (id) => {
        const response = await fetch(`/api/${id}`)
        const responseData = await response.json();
        setProductData(responseData.product)
    }
    return (
        <div>
            {productData && productData.price }
            <ul>
                {
                    props.productItems.map((item) => (
                        <li key={item.title}>{item.title}
                        <button onClick={productPriceHandler.bind(null, item.id)}>Show Price</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)
    return {
        props: {productItems: data}
    }
}
export default ProductPage;