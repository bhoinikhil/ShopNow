
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { useEffect, useMemo, useState } from 'react';
import axios from "axios";
// import '../App.css'
const MySwiper = ({addToCard, section}) => {
    const [product, setProduct] = useState([])
    const fetch = async () => {
        const res = await axios.get("http://localhost:2031/products")
        setProduct(res.data)
    }
    useEffect(() => {
        fetch();
    }, [])

    const treandingData=useMemo(()=>{
        return product.filter((pro)=>{
            return section==="all"? pro.isTreanding=== true :pro.category.toLowerCase() ===section.toLowerCase() && pro.isTreanding=== true 
        })
    })
    
    return (
        <>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                    loop: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper  py-2   "
            >
                {
                    treandingData.map((ele, index) => {
                        return (
                            <SwiperSlide>
                                <div className="swiper-card bg-light shadow rounded pb-2">
                                    <img src={ele.image} alt="img" />
                                    <div className="swiper-content  text-center ">
                                        <p className=' m-0'>{ele.title} </p>
                                        <button onClick={()=>{addToCard(ele)}} className='btn bg-primary text-light py-0 w-75 button'>AddToCart</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}

export default MySwiper
