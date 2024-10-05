// import logo from "../../icons/logoipsum-white.svg"
import facebook from "../../icons/facebook.svg"
import instagram from "../../icons/instagram.svg"
import twitterX from "../../icons/x-twitter.svg"
import discord from "../../icons/discord.svg"
import "./Footer.css"



function Footer() {
  return (
    <div className='footer'>
        <div className="footer-left">
            <div>
                <div className="logo">
                    <h1 className="SPECIAL">MERCURY</h1>
                    {/* <img src={logo} alt="" /> */}
                </div> 
                <div className="footer-text">
                    <p>Creating unique phone stickers for every style.</p>
                </div>
            </div>
            <div className="social-icons">
                <img src={discord} alt="" />
                <img src={instagram} alt="" />
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FMercuryAbakala" target="_blank" rel="noopener noreferrer"><img src={twitterX} alt="" /></a>
                <a href="https://www.facebook.com/upright.abakala" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
            </div> 
        </div>
        <div className="footer-center">
            <h3>Explore</h3>
            <ul>
                <a href="#collection">Categories</a>
                <a href="#collection">Latest Trends</a>
                <a href="#collection">New Designs</a>
                <a href="#collection">Feaured Collection</a>
            </ul>
        </div>
        <div className="footer-right">
            <h3>About</h3>
            <ul>

                <a href="https://www.google.com/maps/search/mushroom+near+Annex's+Tower,+Eldoret/@0.4925213,35.3008993,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">Place</a>
                <a href="#about">Why Choose Us</a>
                <a href="#about">Support</a>
                <a href="#terms">Terms & Service</a>
            </ul>
        </div>
    </div>
  )
}

export default Footer