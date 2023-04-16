import { useState, useEffect } from "react"

export const ProductsComponent = (props) => {

    const [productList, setProductList] = useState([]);

    const [ productForm, setProductForm] = useState({
        title: "",
        price: 0,
        description: "",
        image: "",
        category: ""
    });

    const handleGetAllProducts = async () => {
        const products = await fetch('https://fakestoreapi.com/products')
        .then( res=>res.json() )
        .then( data => data )

        console.log({products});

        setProductList(products);
    }

    const submitNewProduct = (event) => {
        event.preventDefault();
        console.log({productForm});

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: productForm.title,
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    const handleInputChange = (event) => {
        console.log(event.target);
        const target = event.target;

        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setProductForm({
            ...productForm,
            [name]: value 
        });
    }

    useEffect( () => {
        console.log({productForm})
    }, [productForm])

    return (
        <div>
            <h1>Productos</h1>

            <form className="formulario" onSubmit={submitNewProduct}>
                <label htmlFor="title">Título: </label>
                <input type="text" id="title" name="title" 
                placeholder="Título" required 
                value={productForm.title}
                onChange={handleInputChange}
             />

             <button type="submit">Registrar producto</button>
            </form>

            <hr />


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