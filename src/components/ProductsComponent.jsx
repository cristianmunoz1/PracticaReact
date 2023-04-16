import { useState, useEffect } from "react"

export const ProductsComponent = (props) => {

    const [productList, setProductList] = useState([]);

    const handleGetAllProducts = async () => {
        const products = await fetch('https://fakestoreapi.com/products')
        .then( res=>res.json() )
        .then( data => data )

        console.log({products});

        setProductList(products);
    }

    return (
        <div>
            <h1>Productos</h1>

            <button onClick={handleGetAllProducts}>
                Traer todos los productos
            </button>

            <ul>
                {productList.map((product, index) => (
                    <li key={index}>
                        {product.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}