import aboutPic from "../../images/about-pic.png"

import "./About.css"

function About() {
  return (
    <div className="about-wrapper" id="about">
        <h2>About <span className="special">Us</span></h2>
        <div className="about">
            <div className="about-left">
                <img src={aboutPic} alt="" />
            </div>
            <div className="about-right">
                <div className="top-about">
                    <h3>About <span className="special">US</span></h3>
                    <p >At Mercury Tech, we believe your phone should reflect your personality. What started as a small hobby turned into a mission to help people personalize their gadgets with vibrant, durable, and unique stickers.</p>
                </div>
                <div className="bottom-about">
                    <h3>Why Choose <span className="special">Us</span></h3>
                    <p>Our stickers are not only fun and creative but are also made from high-quality, eco-friendly materials to ensure they last as long as your phone does.</p>
                </div>


            </div>
        </div>
    </div>
    
  )
}

export default About