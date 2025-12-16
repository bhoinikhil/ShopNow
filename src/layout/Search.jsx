import { useContext, useEffect, useState } from "react";
import { searchData } from "./MyNavbar";
import axios from "axios";
import SecondaryCard from "../Components/productSec/SecondaryCard";


function Search(){
     let search =useContext(searchData)

    //api fetching
     const[product,setProduct] = useState([])
     const fetchProduct= async()=>{
        const res =await axios.get("http://localhost:2031/products")
        setProduct(res.data)
     }
     useEffect(()=>{
        fetchProduct()
     },[])
    //filter api
    const filterProduct = product.filter((stu)=>{
        return search ===""? "": stu.title.toLowerCase().includes(search.toLowerCase())
    })
    return(
        <>
        <div className=" row mx-auto ">
              {
                filterProduct.map((ele,index)=>{
                    return(
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                        <SecondaryCard key={index} obj={ele} />
                        </div>
                    )
                })
              }
        </div>
        </>
    )
}
export default Search;