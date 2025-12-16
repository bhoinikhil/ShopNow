
import { NavLink } from "react-router-dom";
import Carosel from "../Components/Carosel/Carosel";
import MySwiper from "../Components/MySwiper";


function Men({ product, add }) {

    //men filter
    const page = "men"
    const menData = product.filter((stu) => {
        return stu.category.toLowerCase() === page.toLowerCase()
    })

    const addToCard = (obj) => {
        add(obj)
    }
 
    const sliderImg = {
        img1: "/public/men/slider/slider2.png",
        img2: "/public/men/slider/slider1.png",
        img3: "/public/men/slider/slider3.png",
        img4: "/public/men/slider/slider4.png",
    }
    return (
        <>
            <div className="row ">
                <div className="col-11 mx-auto px-1 "><Carosel obj={sliderImg} /></div>
            </div>
            <div className="row">
               <div className="col-10 mx-auto px-0 my-2 ">
                    <h3 className="ps-3">Trending Products</h3>
                    <MySwiper addToCard={addToCard} section={page} />
                </div>
            </div>
            
            <div className="container-fluid ">
                <div className="container">
                    <div className="row">
                        <h3 className="">Products</h3>
                        {
                            menData.map((obj, index) => {
                                return (
                                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" key={index} >
                                        <div className=" card img-hover mb-2 mx-auto p-2 ">
                                            <NavLink to={`/product/${obj.id}`} className="no-underline">
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
                                            <button className="btn font ms-2 btn-primary py-1 w-50" onClick={() => { addToCard(obj) }}>Add To Cart</button>
                                        </div>
                                    </div>
                                )
                            }, [])
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Men;