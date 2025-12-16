
import "./primaryCard.css";
function PrimaryCard(props) {
    
    return (
        <>
          <div className="col-lg-2 col-sm-3 col-4 ">
             <div className="PrimaryCard ">
            <div className="primaryCardImgSec">
                <img src={props.obj.img} alt="" />
            </div>
            <div className="primaryBody text-center">
                <span className="productName ">{props.obj.offer}</span>
                <button className="btn btn-primary w-75 mx-auto mt-2  "> ADD TO CART</button>
            </div>
           </div>
          </div>
        </>
    )
}
export default PrimaryCard;