import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsCurrencyRupee } from "react-icons/bs";

function Product(){
    const{proId}=useParams();
    const[product,setProduct]= useState([]);
    
    const fetch= async()=>{
        const res = await axios.get(`http://localhost:2031/products/${proId}`)
        setProduct(res.data)
    }
    useEffect(()=>{
        fetch();
    },[])

    //calculate the avg discount of product 
    const avg= (mrp,price)=> {
        const a = (mrp -price)*100;
        const avgDecimal = a/mrp;
        const avg = Math.round(avgDecimal)
        return avg;
    }
  
    
    
    return(
        <>
     
         <div className="container-fluid ">
               <div className="row">
                {/* left section */}
                <div className="col-md-4 col-12 ">
                    <div className="row">
                        <div className="col-2  ">
                            <div className="row  p-2 ">
                                <div className="col"><img src={product.image} alt="" className="w-100"  /></div>
                            </div>
                            <div className="row  p-2">
                                <div className="col"><img src={product.image2} alt=""  className="w-100" /></div>
                            </div>
                            <div className="row  p-2">
                                <div className="col"><img src={product.image3} alt="" className="w-100"  /></div>
                            </div>
                        </div>
                        <div className="col-10  text-center">
                            <img src={product.image} alt="" className=" productimage w-100"  />
                        </div>
                    </div>
                </div>
                {/* right section  */}
                <div className="col-md-8 col-12  ps-3">
                    <div className="proInfo d-flex flex-column row-gap-2">
                        <div className="brand fs-6">{product.brand}</div>
                        <div className="title"><h3>{product.title}</h3></div>
                        <div className="ratings text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/> <span>4.5</span></div>
                        <div className="price-sec d-flex align-item-center">
                            <span className="price fs-2">{product.price}<span className="fs-6"><BsCurrencyRupee /></span></span>
                            <span className="mrp text-decoration-line-through ms-3 text-danger">{product.mrp} <span className="fs-5"><BsCurrencyRupee /></span></span>
                            <span className="saving text-success ms-3">{ product.mrp-product.price} <span className="fs-6"><BsCurrencyRupee /></span> Saved</span>
                            <span className="saving text-success ms-3 fs-6">inclusive of all taxes </span>
                        </div>
                        <div className="offer text-warning">{avg(product.mrp,product.price)}% off</div>
                        <div className="size-sec d-flex gap-2"> 
                            <button className="btn btn-secondary p-1 px-3">S</button>
                            <button className="btn btn-secondary p-1 px-3">M</button>
                            <button className="btn btn-secondary p-1 px-3">XL</button>
                            <button className="btn btn-secondary p-1 px-3">XXL</button>
                        </div>
                        <div className="about w-75">
                            <h4>About this item</h4>
                            <p> {product.about} </p>
                        </div>
                        <div className="productDetails ">
                            <h4>Product Details</h4>
                            <table className="table text-start w-sm-100 w-75 ">
                              <tbody>
                                <tr >
                                    <th>Brand : </th>
                                    <td> {product.brand}</td>
                                </tr>
                                <tr>
                                    <th>Color : </th>
                                    <td> Red</td>
                                </tr>
                                <tr>
                                    <th>Country of Mfg. : </th>
                                    <td> India</td>
                                </tr>
                                </tbody> 
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <TrandingSec/>
        </>
    )
}
export default Product;