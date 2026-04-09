import React, { useState } from 'react'

const Cart = (props) => {
  const [addToCart, setAddToCart] = useState(props.cartId)
  // Remove Function
  const handleDelete=(id)=>{
     const updated = addToCart.filter(item => item.id!=id)
     props.setCartId(updated)
     setAddToCart(updated)
  }
  // for actual price.
  const totalPrice = addToCart.reduce((accumulator,item)=> {return accumulator + Number(item.price)},0)
   // for MRP
  const totalMrp = addToCart.reduce((accumulator,item)=>{return accumulator + Number(item.mrp)},0)
 
  return (
    <div>
       {/* Cards in cart section */}
      { addToCart.length==0? <div className='text-center'> <h2 className='height'>Cart is Empty </h2></div> : 
         addToCart.map((ele, index) => {
          return (
            <div key={index} className="container-fluid w-100 border mb-4 mt-2 shadow">
              <div className="row">
                <div className="col-12 col-sm-3 mb-2 rounded">
                  <img src={ele.image} alt="" className="w-100 rounded" />
                </div>
                <div className="col-12 col-sm-9 ps-lg-2 position-relative">
                  <p className='fs-6'>{ele.brand}</p>
                  <p className="fs-4 fw-bold ">{ele.title} </p>
                  <p>{ele.about}</p>
                  <div className="price fw-bold">
                    <span className="price fs-4" >₹{Number(ele.price)} </span>
                    <span className="mrp text-danger">₹{Number(ele.mrp)} </span>
                    <span className="off text-success ms-2">{ele.discount}</span>
                  </div>
                  <div >
                    <span>Qty : </span>
                    <button className="btn"> 1</button>
                    <button className="btn btn-success py-0 ms-2" >+</button>
                    <button className="btn btn-danger py-0 ms-2">-</button>
                  </div>
                  <button className="btn text-danger position-absolute top-0 end-0" onClick={()=>{handleDelete(ele.id)}}>Remove</button>
                </div>
              </div>
            </div>
          )
        })
      }

      {/*  cart total section */}
      {addToCart.length!=0? <div className="row p-2 " >
                  <div className="col-12 col-lg-6 col-md-6 mx-auto">
                    <table className='border p-3 mx-auto w-100'>
                    <tr>
                      <th className='text-center ' colSpan={2}>Price Details</th>
                    </tr>
                    <tr>
                      <td className='p-2'>Total items :</td>
                      <td className='p-2 text-end'>{addToCart.length}</td>
                    </tr>
                    <tr>
                      <td className='p-2'>Price :</td>
                      <td className='p-2 text-end'> ₹{totalMrp}</td>
                    </tr>
                    <tr>
                      <td className='p-2' >Discount :</td>
                      <td className='p-2 text-end'> ₹{totalMrp - totalPrice}</td>
                    </tr>
                    <tr>
                      <td className='p-2'>Dilivery Charges :</td>
                      <td className='p-2 text-end'> ₹0</td>
                    </tr>
                    <tr>
                      <th className='p-2'>Total Amount</th>
                      <th className='p-2 text-end'> ₹{totalPrice}</th>
                    </tr>
                    <tr>
                      <td colSpan={2} className='py-2 '> <div className="bg-success w-75 rounded mx-auto text-center text-light">You'll save {totalMrp - totalPrice} ₹ on this Order!</div></td>
                    </tr>
                  </table>
                    
                  </div>
        
                </div> :""}
                
    </div>
  )
}

export default Cart
