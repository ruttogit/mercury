import "./Collection.css"
// import arrowLeft from "../../images/arrow-left.png"
// import arrowRight from "../../images/arrow-right.png"
import col1 from "../../images/col-1.png"
import col2 from "../../images/col-2.png"
import col3 from "../../images/col-3.png"
import col4 from "../../images/col-4.png"


function Collection() {
  return (
    <div className="collection" id="collection">
        <h2>Our <span className="special">Collections</span></h2>
        <div className="collection-wrapper">
            {/* <img src={arrowLeft} alt="" /> */}
            <div className="collection-cont">
                <img src={col1} alt="" />
                <img src={col2} alt="" />
                <img src={col3} alt="" />
                <img src={col4} alt="" />
            </div>
            {/* <img src={arrowRight} alt="" /> */}
        </div>
    </div>
  )
}

export default Collection