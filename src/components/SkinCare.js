import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from './context'

const SkinCare = () => {

  const { products, getCartId } = useGlobalContext();

  const skinCare = products.filter((product) => {
    return product.category === "skincare";
  })
  // console.log(electonics);
  return (
    <div className='row m-2'>
      {skinCare.map((product) => {
        return <>
          <div className='d-flex justify-content-center col-md-4 mt-5' key={product._id}>
            <div className="card border border-dark p-3 mb-2 text-dark">
              <div className="card-body">
                <img className='image' src={product.images[0]} alt={product.title} />
                <h5 className="card-title">{product.title}</h5>
                <p className='card-title'>{product.description}</p>
                <img src="./images/rating.png" alt="ewsc" style={{ width: "150px" }} />
                <p className="card-text mt-3"><span className='text-danger'>-{product.discountPercentage}% </span> ${product.price}</p>
                <p>MRP <del>${Math.floor(((product.discountPercentage * product.price) / 100) + product.price).toString()}</del> </p>
                <button class="btn btn-sm btn-success" onClick={() => getCartId(product.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </>
      })}
      <ToastContainer />
    </div>
  )
}

export default SkinCare
