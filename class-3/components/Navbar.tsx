import Link from "next/link"

function Navbar(){
    return (
        <div>
            <Link href="/"><b>Home</b></Link>
            <Link href="/about"><b>About</b></Link>
            <Link href="/contact"><b>Contact</b></Link>
            <Link href="/products"><b>Products</b></Link>
        </div>
    )
};
export default Navbar;
