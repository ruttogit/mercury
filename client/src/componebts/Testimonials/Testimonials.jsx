import arrowLeft from "../../images/arrow-left.png"
import arrowRight from "../../images/arrow-right.png"
// import pic from "../../images/me.jpg"


import "./Testimonials.css"
import { reviews } from "../../data"
import { useState } from "react"

function Testimonials() {
    const [index, setIndex] = useState(0);
  const {img, name, description} = reviews[index];


  const prevTestimonialHandler = () => {

    if (index <= 0){
      setIndex(reviews.length - 1)
    }else{
      setIndex(prev => prev - 1)
    }
  }

  const nextTestimonialHandler = () => {
    if (index >= reviews.length -1){
      setIndex(0)
    }
    setIndex(prev => prev + 1)
  }


  return (
    <div className="testimonials">
        <h2>Customer <span className="special">Reviews</span></h2>
        <div className="testimonial-wrapper">
            <img src={arrowLeft} alt="" className="arrows" onClick={prevTestimonialHandler}/>
                        <div className="testimonial-card">
                        <div className="img-testimonial">
                            <img src={img} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </div>
                        <div className="reviewstars">
                           
                        </div>
                    </div>
            <img src={arrowRight} alt="" className="arrows" onClick={nextTestimonialHandler}/>
        </div>
    </div>
  )
}

export default Testimonials