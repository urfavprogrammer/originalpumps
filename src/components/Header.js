import { Link, NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
        <div className="headerContainer">

            <div className="logoSection">
                    <Link to="/" className="">
                        {/* <img src={logo} alt=""/> */}
                        <h3>Original Pumps, <span style={{ color: "#551414" }}>Inc.</span> </h3>

                    </Link>
            </div>
              

                <nav className="navSection">
                    <NavLink to="/" className="navItem" end> Home</NavLink>
                    <NavLink to="/AboutUs" className="navItem" > About Us</NavLink>
                    <NavLink to="/Products" className="navItem" > Products</NavLink>
                    <NavLink to="/Contact" className="navItem" > Contact Us</NavLink>
                </nav>
        </div>
           
            
        </header>
    )
}