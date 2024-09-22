import Link from "next/link"

function Footer(){
    return (
        <div>
            <div>
                <Link href="/"><b>Home</b></Link>
                <Link href="/about"><b>About</b></Link>
                <Link href="/contact"><b>Contact</b></Link>
                <Link href="/products"><b>Products</b></Link>
            </div>
            <div className="rights">
                <p>&copy; 2024 All rights reserved</p>
            </div>  
        </div>
    )
};
export default Footer;
