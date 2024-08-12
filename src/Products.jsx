function Products(product)
{
    const name = product.name;
    const description = product.description;
    const price = product.price;
    
    return(
        <div className="p-3 border rounded shadow mb-5">
            <h2>{name}</h2>
            <h3>Description</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default Products;