import {Routes, Route} from "react-router-dom";
import { Home, AboutUs, Products, Contact, ProductDescription } from "../pages";

export const AllRoutes = () => {
    return(
        <>
        
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/ContactUs" element={<Contact />} />
                    <Route path="/product/:id" element={<ProductDescription />} />
                </Routes>
       
           
        </>
    )
}