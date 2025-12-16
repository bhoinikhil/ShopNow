
import { NavLink } from "react-router-dom";
import "./SecondaryCard.css";
import { useMemo } from "react";

function SecondaryCard({obj}) {


    return (


        <div className=" card  mb-2 mx-auto p-2 ">
            <NavLink to={`/product/${obj.id}`}  className="no-underline">
            <div className="imgSec rounded overflow-hidden">
                <img src={obj.image} alt="image" />
            </div>
            <div className="bodySec text-dark ">
                <div className="brandName ps-2 font">{obj.brand}</div>
                <div className="titleName ps-2 font-title">{obj.title}</div>
                <div className="price-sec d-flex align-center">
                    <span className="price ps-2 fs-6">{obj.price} ₹ </span>
                    <span className="mrp ps-2 pe-0 text-danger font">{obj.mrp} ₹</span>
                    <span className="discount ps-2 text-success font ">{obj.discount} OFF</span>
                </div>
                      
            </div>
            </NavLink>
                <button className="btn font ms-2 btn-primary py-1 w-50" onClick={()=>{addtocard(obj)}}>Add To Cart</button>
        </div>

    )
}
export default SecondaryCard;