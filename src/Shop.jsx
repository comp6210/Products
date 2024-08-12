import Products from "./Products";

function Shop()
{
    return(
        <div className="container">
         <div className="row">
            <div className="col">
                <Products name="Apple" description="Fruit" price="1.00" />
            </div>
            <div className="col">
                <Products name="Banana" description="Fruit" price="1.20" />
            </div>
            <div className="col">
                <Products name="Jims Ice Cream" description="Ice Cream" price="10.00" />
            </div>
         </div>

         <div className="row">
            <div className="col">
                <Products name="Apple" description="Fruit" price="1.00" />
            </div>
            <div className="col">
                <Products name="Banana" description="Fruit" price="1.20" />
            </div>
            <div className="col">
                <Products name="Jims Ice Cream" description="Ice Cream" price="10.00" />
            </div>
         </div>

         <div className="row">
            <div className="col">
                <Products name="Apple" description="Fruit" price="1.00" />
            </div>
            <div className="col">
                <Products name="Banana" description="Fruit" price="1.20" />
            </div>
            <div className="col">
                <Products name="Jims Ice Cream" description="Ice Cream" price="10.00" />
            </div>
         </div>
        </div>
    )
}

export default Shop;