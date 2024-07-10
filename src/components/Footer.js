import { NavLink } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="footer">
        <div>
        <p><span>Copyright © 2024 Original Pumps,Inc - All Rights Reserved.</span></p>

        <nav className="footerNav">
          <NavLink to="/" className="navItem" end> Home</NavLink>
          <NavLink to="/AboutUs" className="navItem" > About Us</NavLink>
          <NavLink to="/Products" className="navItem" > Products</NavLink>
          <NavLink to="/Contact" className="navItem" > Contact Us</NavLink>
        </nav>
      </div>
    </footer>
    
  )
}

