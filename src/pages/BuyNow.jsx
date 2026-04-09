import axios from 'axios';
import { FaStar, FaStarHalf } from 'react-icons/fa6';

import { useLocation, useParams } from 'react-router-dom';

const BuyNow = () => {
    const location = useLocation();
    const product = location.state;

    const today = new Date();
    const futureDate = new Date();

    futureDate.setDate(today.getDate() + 5);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3 overflow-hidden">
                        <img src={product.image} className='image-height' alt="ProductImage"  />
                    </div>
                    <div className="col-9">
                        <h3>{product.title}</h3>
                        <div className="ratings text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /> <span>4.5</span></div>

                        <div className="price-sec d-flex align-center ">
                            <span className="price ps-2 fs-6">{product.price} ₹ </span>
                            <span className="mrp ps-2 pe-0 text-danger font">{product.mrp} ₹</span>
                            <span className="discount ps-2 text-success font ">{product.discount} OFF</span>
                        </div>
                        <div className=''>
                            <div>Delivery by {futureDate.toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}</div>
                        </div>
                    </div>
                </div>
                {/* Payment details */}
                <div className="row">
                    <div className="col-lg-3 col-12"></div>
                    <div className="col-12 col-lg-6 mx-1 ">
                        <table className='w-100'>
                            <tbody>
                                <tr className=''>
                                    <td>MRP</td>
                                    <td >₹{product.mrp}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td> - {product.mrp - product.price}</td>
                                </tr>
                                <tr>
                                    <td>Shiping charges</td>
                                    <td>₹0</td>
                                </tr>
                                <tr>
                                    <td>Total Amount</td>
                                    <td>₹{product.price}</td>
                                </tr>
                                <tr>
                                    <td><span>You'll save ₹{product.mrp - product.price} on this order!</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyNow
