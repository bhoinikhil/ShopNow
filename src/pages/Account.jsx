import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const Account = () => {
    const [isLogin, setIsLogin] = useState(true)
   const {register,handleSubmit, reset} = useForm()
   
   const addData= (user)=>{
    axios.post("http://localhost:2031/users" ,user)
    alert("account created Successfully")
   }
    
    return (
        <>
            <div className="container-fluid">
                <div className="row px-4">
                    <div className="col-12 col-lg-4 col-sm-6 bg-light border shadow p-4 mx-auto my-5 rounded overflow-hidden">
                        <div className="row ">
                            {/* Top Button section */}
                            <div className="row ">
                                <div className="col-6  p-2 text-end ">
                                    <button className={isLogin ? "active btn btn-primary w-50 " : "btn outline-primary w-50"} onClick={() => { setIsLogin(true) }}>Login</button>
                                </div>
                                <div className="col-6  p-2 ">
                                    <button className={!isLogin ? "active btn btn-primary w-50 " : " btn outline-primary w-50"} onClick={() => { setIsLogin(false) }}>SignUp</button>
                                </div>
                            </div>
                            {/* Bottom form section */}
                            <div className="row mx-auto ">
                                {
                                    isLogin ? <>
                                        {/* Login form section */}
                                        <div className=' col-12 text-center  '>
                                            <h3 className='text-center '>Login</h3>
                                            <form action="">
                                                <input type="text" placeholder='Username' className='px-2 form-control mt-2 ' />
                                                <input type="password" placeholder='Password' className='px-2 form-control mt-2 ' />
                                                <div className=' text-end'> <a href="#" className='text-decoration-none  '>Forget Passward?</a></div>
                                                <button className='btn btn-primary w-100 mt-2'>Login</button>
                                                <div>I don't have account <a href="# " className='text-decoration-none'>SignUp</a></div>
                                            </form>
                                        </div>
                                    </> : <>
                                        {/* SignUp form section */}
                                        <div className=' col-12 text-center'>
                                            <h3>SignUp</h3>
                                            <form action="" onSubmit={handleSubmit(addData)}>
                                                <input type="text" placeholder='First Name' className='form-control mb-2' {...register("firstName")} />
                                                <input type="text" placeholder='Last Name' className='form-control mb-2'{...register("lastName")} />
                                                <input type="mail" placeholder='Username / Email' className='form-control mb-2'{...register("userName")} />
                                                <input type="password" placeholder='Create Password' className='form-control mb-2' {...register("password")} />
                                                <button className='btn btn-primary w-100'>Submit</button>
                                                <span  className='text-decoration-none'>Already have a account</span>
                                            </form>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account
