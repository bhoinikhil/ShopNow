import {useForm} from "react-hook-form"
import axios from "axios"
function Seller() {
    const{register, handleSubmit, reset} = useForm()
    const addData=(data)=>{
        axios.post("http://localhost:2031/products",data)
        alert("data added!!")
    }

  return (<>
         <section className="h-100 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0 w-75 mx-auto">
                                    <div className="col-xl-12 ">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase text-primary">Add Product</h3>
                                          <form onSubmit={handleSubmit(addData)} action="" >
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register("title")} />
                                                        <label className="form-label" htmlFor="form3Example1m">Product Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register("brand")} />
                                                        <label className="form-label" htmlFor="form3Example1n">BrandName</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="number" id="form3Example1m1" className="form-control form-control-lg" {...register("mrp")}/>
                                                        <label className="form-label" htmlFor="form3Example1m1">MRP</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="number" id="form3Example1n1" className="form-control form-control-lg" {...register("price")} />
                                                        <label className="form-label" htmlFor="form3Example1n1">Price to Sell</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" id="form3Example8" className="form-control form-control-lg" {...register("about")} />
                                                <label className="form-label" htmlFor="form3Example8">Product Discription</label>
                                            </div>

                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                <h6 className="mb-0 me-4">Category </h6>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                        value="men"{...register("category")} />
                                                    <label className="form-check-label" htmlFor="femaleGender">Men</label>
                                                </div>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                        value="women" {...register("category")} />
                                                    <label className="form-check-label" htmlFor="maleGender">women</label>
                                                </div>
                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                        value="kids" {...register("category")} />
                                                    <label className="form-check-label" htmlFor="maleGender">Kids</label>
                                                </div>
                                            </div>
                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" id="form3Example9" className="form-control form-control-lg" {...register("image")} />
                                                <label className="form-label" htmlFor="form3Example9">Product first Image Url</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" id="form3Example90" className="form-control form-control-lg"{...register("image2")} />
                                                <label className="form-label" htmlFor="form3Example90">Product Second Image Url</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" id="form3Example99" className="form-control form-control-lg" {...register("image3")} />
                                                <label className="form-label" htmlFor="form3Example99">Product Third Image Url</label>
                                            </div>
                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg">Reset all</button>
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg ms-2">Submit form</button>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

   
    
  </>)
}
export default Seller;

//             "image": "/public/women/traditional/wethentic4.webp",
//             "image2": "./public/men/casualShirts/one2.webp",
//             "image3": "./public/men/casualShirts/one3.webp",
//             "brand": "Nykaa Fashion",
//             "title": "Panjabi Kurta Suit ",
//             "price": 1199,
//             "mrp": 1599,
//             "discount": "40% ",
//             "category": "women",
//             "about":