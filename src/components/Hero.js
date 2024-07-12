import { NavLink } from 'react-router-dom';
import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-image">
                <img src="../assets/images/bg/oil-refinery-plant-.jpg" alt="Illustration" />
            </div>
            <div className="hero-content">
                <p><span style={{ color: "#FFDC4B" }}>Welcome to Original Pumps Inc</span></p>
                <h1>Empowering<br/> Industries with Original Pumps</h1><br />
                <p>We make high quality pumps from Turkish Origin</p>
                <NavLink to="/products" className="hero-button">Browse Products</NavLink>
            </div>

        </section>
    );
};