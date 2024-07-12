import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <header className="App-header">
        <h1>About Us</h1>
        <p>
          Original Pump Inc is a Turkish brand that always aims to produce the best quality products and has been working for this purpose for a long time. Our products are made with high standard which have the technology, quality, and durability. Original Pump Inc is also one of the best pump manufacturer in Turkey.
        </p>
      </header>
      <div className="AboutContainer">
      
        <div className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide the best products and services to our customers. We strive for excellence in everything we do.
              Since the day we were founded, we have always provided our consumers with sustainable, safe, accurate and efficient products as part of our high standard. We create business models and processes that adopt the values you care about.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be the leading company in our industry, recognized for our commitment to quality and customer satisfaction.
              Our products are used in many areas where liquids need to be pressurized, from industrial processes and petro-chemical industry, agricultural irrigation to general purpose water supply, waste water transfer and treatment plants.
            </p>
          </div>
        </div>
        <div className="team">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3>Bob Johnson</h3>
              <p>COO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
  )
}

 
