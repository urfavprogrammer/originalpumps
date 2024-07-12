import { NavLink } from "react-router-dom";


export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="footer">
        <p><span className="copyRight">Copyright © {year} Original Pumps,Inc - All Rights Reserved.</span></p>

        <nav className="footerNav">
          <NavLink to="/" className="navItem" end> Home</NavLink>
          <NavLink to="/AboutUs" className="navItem" > About Us</NavLink>
          <NavLink to="/Products" className="navItem" > Products</NavLink>
          <NavLink to="/ContactUs" className="navItem" > Contact Us</NavLink>
        </nav>
      </div>
    </footer>
    
  )
}

