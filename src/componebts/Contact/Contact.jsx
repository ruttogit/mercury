import { MdOutlineLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePlace } from "react-icons/md";
import "./Contact.css"
import React from "react";


function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ff7c08f9-f3d2-4aba-94fe-837c65735b13");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    
  return (
    <div className='contact' id="contact">
        <div className="contact-left">
            <h3>Get in <span className="special">Touch</span> </h3>
            <p>Have a question, custom request, or just want to say hi? We’re here to help! Whether you're curious about our designs, need assistance with your order, or want to collaborate, feel free to reach out.</p>
            <div className="contact-det">
                <a href="tel:254759235356" target="_blank" rel="noopener noreferrer"><div className="det">
                    <div className="c-icon"><MdOutlineLocalPhone /></div>
                    <p>+254759235356</p>
                </div></a>
                <a href="mailto:kipkoechd09@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="det">
                        <div className="c-icon"><TfiEmail /></div>
                        <p>manuabakala162@gmail.com</p>
                    </div>
                </a>
                <a href="https://www.google.com/maps/search/mushroom+near+Annex's+Tower,+Eldoret/@0.4925213,35.3008993,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" rel="noopener noreferrer" target="_blank">
                <div className="det">
                    <div className="c-icon"><MdOutlinePlace /></div>
                        <p>Eldoret-Nakuru Rd - Annex</p>
                    </div>
                </a>
               
            </div>
        </div>
        <div className="contact-right">
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Phone Number" required/>
                <textarea name="" id="" placeholder="Message" required></textarea>
                <button type="submit" className="btn">Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact