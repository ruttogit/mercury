import heroImg from "../../images/hero-img.png"
import "./Hero.css"
function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1>Express Your <span className="special">Style</span> with Custom Phone  <span className="special">Stickers!</span></h1>
            <p>Make your phone stand out with custom-designed, durable stickers that combine creativity and quality. Perfect for every personality and every device.</p>
           <a href="#contact"> <button className="btn hero-btn">Order Now</button></a>
        </div>
       
        <div className="hero-right">
            <img src={heroImg} alt="" />
        </div>
    </div>
  )
}

export default Hero