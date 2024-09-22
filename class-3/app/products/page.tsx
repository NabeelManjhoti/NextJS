import Link from "next/link";

function Products(){
    return(
        <div className="products">
            <h1>This is Products Page</h1>
            <Link href="/products/laptop"><h2>Laptop Details</h2></Link>
        </div>
    )
};
export default Products;
