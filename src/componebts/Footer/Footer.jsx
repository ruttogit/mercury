import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
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
                <div className="icon"><a href="https://www.facebook.com/upright.abakala" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></div>
                <div className="icon"><a href="https://x.com/i/flow/login?redirect_after_login=%2FMercuryAbakala" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></div>
                <div className="icon"><a href="#instagram"><FaInstagram /></a></div>
                <div className="icon"><a href="https://wa.me/254745667442" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></div>
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