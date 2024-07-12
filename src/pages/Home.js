import { NavLink } from "react-router-dom"
import { Hero} from "../components"


export const Home = () => {


  return (
    <>
      <Hero />
      



      {/* <section >
         
          <Carousel />
          

        </section> */}



      {/* Section 2 */}
      {/* flexboxContainer */}

      <section >

        <div className="ContactContainer">

          <div className="ProductDetail">
            <h1>Engineering Excellence & Proven Expertise</h1>
            <p>Rely on Original Pump's' skilled engineers and proven track record in supplying top-tier machinery and pipe systems for industries, especially oil and gas refineries. Experience innovation, reliability, and engineering excellence with Original Pump Industrial.</p>
          </div>

          <div className="ProductDetail homeProductImg">
            <NavLink to="/products" ><img src="../assets/images/heat_exchanger.jpg" alt="Heat Exchanger" /></NavLink>
            <p className="name"> Machinery </p>
          </div>
          <div className="ProductDetail homeProductImg">
            <NavLink to="/products"><img src="../assets/images/steel_iron.jpg" alt="" /></NavLink>
            <p className="name"> Steel & Iron </p>
          </div>

        </div>

      </section>



      {/* Section 3 */}

      <section>
        <div className="caption">
          <h1>About Us</h1>
        </div>
        <div className="AboutUsContainer">
          <div className="AboutUsContent">
            <span><img src="../assets/images/bg/qt.webp" alt="Heat Exchanger" /></span>

          </div>
          <div className="AboutUsContent"><p><span>Original Pump Inc is a Turkish brand that always aims to produce the best quality products and has been working for this purpose for a long time. Our products are made with high standard which have the technology, quality, and durability. Original Pump Inc is also one of the best pump manufacturer in Turkey. </span></p></div>
          <div className="AboutUsContent"><p><span>Original Pump Inc, since the day we were founded, we have always provided our consumers with sustainable, safe, accurate and efficient products as part of our high standard. We create business models and processes that adopt the values you care about. </span> </p></div>
          <div className="AboutUsContent">
          <span><img src="../assets/images/bg/ip.webp" alt="Heat Exchanger" /></span>
          </div>
          <div className="AboutUsContent">5</div>
          <div className="AboutUsContent"><p><span>In order to produce optimum solutions to your changing needs, we closely follow the technologies in the world on one hand, and develop new technologies in our R&D laboratories on the other. Our responsibility towards the sector, people and future generations always motivates us to do newer and better. We produce our pumps with optimize system efficiency within international standards that are accepted all over the world. </span></p></div>
          <div className="AboutUsContent"><p><span>Original Pump Inc products are used in many areas where liquids need to be pressurized, from industrial processes and petro-chemical industry, agricultural irrigation to general purpose water supply, waste water transfer and treatment plants. </span></p></div>
          <div className="AboutUsContent">8</div>
        </div>
      </section>




    </>
  )
}

