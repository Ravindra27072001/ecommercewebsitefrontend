import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import { useGlobalContext } from './context';


// const initialValues = {
//   id: "",
//   title: "",
//   price: 0,
//   description: "",
//   category: "",
//   image: "",
//   rating: {
//     rate: 0,
//     count: 0,
//   }
// }
const Cart = () => {


  // const [cart, setCart] = useContext(initialValues);

  // const {cartId} = useGlobalContext();

  const [cart, setCart] = useState([]);


  useEffect(() => {
    showCart();
  });

  let email = localStorage.getItem("email");



  const showCart = async () => {
    try {
      if (email) {
        let res = await axios.get(`${process.env.React_APP_BASE_URL}/cart/${email}`, {
          headers: {
            "Content-Type": "application/json"
          },
        });
        setCart(res.data.response);
      }


    } catch (error) {
      console.log(error)
    }
  }
  // console.log("cart", cart, cart.length);

  const deleteCartItem = async (id) => {
    try {
      let res = await axios.delete(`${process.env.React_APP_React_APP_BASE_URL}/deleteCartItem/${id}`);
      // console.log(res);
      showCart();
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
    } catch (error) {
      console.error('Error deleting Cart:', error);
    }
  }




  return (
    <div className='row m-2'>


      {cart.map((product) => {


        return <>

          {email ? (
            <div className='d-flex justify-content-center col-md-4 mt-5' key={product.id}>
            <div className="card border border-dark p-3 mb-2 text-dark">
              <div className="card-body">
                <img className='image' src={product.thumbnail} alt={product.title} />
                <h5 className="card-title">{product.title}</h5>
                <p className='card-title'>{product.description}</p>
                <img src={"./images/rating.png"} alt="ewsc" style={{ width: "150px" }} />
                <p className="card-text mt-3">MRP - ${product.price} <span className='text-danger'>(-{product.discountPercentage}%)</span> </p>
                <p className='card-title'>Qty: {product.itemNumber}</p>
                <button type="button" class="btn btn-danger" onClick={() => deleteCartItem(product.id)}>Delete</button>
              </div>
            </div>
          </div>
          ): (
            <h5>Please login to see Carts</h5>
          )}
        </>
      })}
      <ToastContainer />
    </div>
  )
}

export default Cart
