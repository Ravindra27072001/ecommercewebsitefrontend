import React from 'react';
// require('dotenv');
// import dotenv from 'dotenv'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogInSchema from '../schemas/LogInSchema';



const RegisterForm = () => {

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  

  const handleSubmit = async (values) => {
    const { email, password } = values;
    console.log(email,password, process.env)
    try {
      
      console.log(process.env.React_APP_BASE_URL);
      const res = await axios.post(`${process.env.React_APP_BASE_URL}api/login`, values, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      console.log("res",res)

      localStorage.setItem("email", `${res.data.email}`)

      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });

      setTimeout(() => {
        // navigate("/");
      }, 1500);

    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000, 
      });

      // console.log("error", error.response.data.message);
    }
  }
  

  return (
    <div className="container w-50">
      <h1 className='d-flex justify-content-center m-5'>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <Field className="form-control" type="email" id="email" name="email" />
            <ErrorMessage className="text-danger error" name="email" component="div" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field className="form-control" type="password" id="password" name="password" />
            <ErrorMessage className="text-danger error" name="password" component="div" />
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
          <p className='mt-3'>Don't have an account? <span><a href="/register">Register</a></span></p>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;








































// import React, {useState} from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom"

// const initialValues = {
//   email: '',
//   password: '',
// }

// function LoginPage() {

//   const navigate = useNavigate();

//   const navigateToAnotherPage = () => {
//     navigate('/register');
//   };

//   const [user, setUser] = useState(initialValues);

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value,
//         })
//     }

//     const login = async () => {
//       const {email,password} = user;
//       await axios.post("http://localhost:3000/register", user);
//   }

//     // console.log(user)

//   return (
//     <div className="container p-5 w-50">
//       {console.log(user)}
//       <h1 className='d-flex justify-content-center m-5'>Login Here</h1>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email:
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name='email'
//             placeholder='email'
//             value={user.email}
//             onChange={handleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password:
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name='password'
//             placeholder='password'
//             value={user.password}
//             onChange={handleChange}/>
//         </div>
//         <button type="submit" className="btn btn-primary mt-2" onClick={login}>Login</button>
//         <p className='mt-3'>Don't have an account? <span><a href="/register" onClick={navigateToAnotherPage}>Register</a></span></p>
//       </form>
//     </div>

//   );
// }

// export default LoginPage;
