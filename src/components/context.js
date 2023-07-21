import React, { useContext, useState, useEffect, useReducer } from "react";
// import reducer from "./reducer";
import { toast } from 'react-toastify';
import axios from 'axios';


const initialState = {
  products: []
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [state, setstate] = useState(initialState);

  const fetchApiData = async () => {
    try {
      const res = await fetch("/data.json");
      const result = await res.json();
      setstate(result);
    } catch (error) {
      console.log(error)
    }
  }

  const getCartId = async (cartId) => {

    const data = state.products.filter((product) => {
      return product.id === cartId;
    })

    const { id, title, price, discountPercentage, description, category, thumbnail, rating } = data[0];

    const credentials = {
      id,
      email: localStorage.getItem("email"),
      itemNumber: 1,
      title,
      price,
      discountPercentage,
      description,
      category,
      thumbnail,
      rating
    }

    try {
      let email = localStorage.getItem("email");
      // console.log(email);
      if (email) {
        const res = await axios.post(`${process.env.React_APP_BASE_URL}/api/addToCart`, credentials, {
          headers: {
            "Content-Type": "application/json"
          },
        });
        // console.log("res", res.data.message);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
      else {
        toast.error("Please login first", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }

    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });

    }
  }



  useEffect(() => {
    fetchApiData();
    // getCartId();
  })


  return <AppContext.Provider value={{ ...state, getCartId }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext }














// import React, { useContext, useEffect, useReducer } from "react";
// import reducer from "./reducer";

// let API = "https://dummyjson.com/products";

// const initialState = {
//   products: []
// }

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const result = await res.json();
//       // console.log(result);
//       dispatch({
//         type: "GET_ALL_DATA",
//         payload: {
//           products: result.products,
//         }
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const electronics = () => {
//     dispatch({
//       type: "GET_ELECTONICS_ITEMS",
//     })
//   }

//   useEffect(() => {
//     fetchApiData(API);
//   })


//   return <AppContext.Provider value={{ ...state, electronics }}>{children}</AppContext.Provider>
// }

// const useGlobalContext = () => {
//   return useContext(AppContext);
// }

// export { AppContext, AppProvider, useGlobalContext }