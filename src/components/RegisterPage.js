import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import SignUpSchema from '../schemas/SignUpSchema';

const RegisterForm = () => {

    const navigate = useNavigate();
    
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    // const validationSchema = Yup.object({
    //     username: Yup.string().required('Username is required'),
    //     email: Yup.string().email('Invalid email address').required('Email is required'),
    //     password: Yup.string().required('Password is required').matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    //     'Password must have at least 6 characters, 1 special character, 1 uppercase letter, and 1 lowercase letter'
    //     ),
    //     confirmPassword: Yup.string()
    //         .oneOf([Yup.ref('password'), null], 'Passwords must match')
    //         .required('Confirm password is required')
    //     });

    const handleSubmit = async (values) => {
        try {
            // const { username, email, password } = values;
            console.log(`${process.env.React_APP_BASE_URL}/api/register`)
            const result = await axios.post(`${process.env.React_APP_BASE_URL}/register`, values); //------Change in this line add .env file and add port number into it-----------------------------------------
            console.log(result);

            toast.success(result.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
            });

            setTimeout(() => {
            // navigate("/login");
            }, 1000);
        } catch (error) {
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1000,
            });
        }
    }

    return (
        <div className="container w-50">
        <h1 className='d-flex justify-content-center m-5'>Register</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <Form>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <Field className="form-control" type="text" id="username" name="username" />
                <ErrorMessage className="text-danger error" name="username" component="div" />
                </div>

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

                <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <Field className="form-control" type="password" id="confirmPassword" name="confirmPassword" />
                <ErrorMessage className="text-danger error" name="confirmPassword" component="div" />
                </div>

                <button type="submit" className="btn btn-primary mt-2" disabled={isSubmitting}>
                Register
                </button>
                <p className='mt-3'>Already have an account? <span><a href="/login">Login</a></span></p>
            </Form>
            )}
        </Formik>
        <ToastContainer />
        </div>
    );
};

export default RegisterForm;



















// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import { Location } from 'react-router-dom';


// const initialValues = {
//     name: '',
//     email: '',
//     password: '',
//     confirm_password: '',
// }

// const RegisterPage = () => {

//     // const navigate = useNavigate();

//     // const navigateToAnotherPage = () => {
//     //     navigate("/login")
//     // }
//     const [user, setUser] = useState(initialValues);
//     const [errors, setErrors] = useState({});
//     const [isSubmit, setSubmit] = useState(false);
  

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value,
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setErrors(validate(user));
//         setSubmit(true);
//     }

//     useEffect(()=> {
//         console.log(errors)
//         if(Object.keys(errors).length === 0 && isSubmit){
//             console.log(user);
//         }
//     },[errors])

//     const validate = (values) => {
//         const errors ={};
//         const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//         if(!values.name){
//             errors.name = "Name is required!"
//         }
//         if(!values.email){
//             errors.email = "Email is required!"
//         } else if(!regex.test(values.email)){
//             errors.email = "This is not a valid email"
//         }
//         if(!values.password){
//             errors.password = "Password is required!"
//         }
//         if(!values.confirm_password){
//             errors.confirm_password = "Confirm password is required!"
//         } else if(values.confirm_password != values.password){
//             errors.confirm_password = "Confirm password should match with password!"
//         }
//         return errors;
//     }


//     const submitRegister = () => {
//         console.log(user)
//         // e.preventDefault();
//         const { name, email, password } = user;
//         axios.post("http://localhost:3000/register", user).then(()=> {
//             // navigate("/login")
//             window.location.href = "/login"
//         })
        
        
//     }






//     return (
//         <div className="container p-5 w-50">
//             {/* {console.log(user)}; */}
//             <h1 className='d-flex justify-content-center m-5'>Register Here</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">
//                         Name:
//                     </label>
//                     <input
//                         type="name"
//                         className="form-control"
//                         id="name"
//                         name='name'
//                         placeholder='name'
//                         value={user.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <p className='text-danger'>{errors.name}</p>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">
//                         Email:
//                     </label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name='email'
//                         placeholder='email'
//                         value={user.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <p className='text-danger'>{errors.email}</p>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">
//                         Password:
//                     </label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         name='password'
//                         placeholder='password'
//                         value={user.password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <p className='text-danger'>{errors.password}</p>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">
//                         Confirm Password:
//                     </label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="confirm_password"
//                         name='confirm_password'
//                         placeholder='confirm_password'
//                         value={user.confirm_password}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <p className='text-danger'>{errors.confirm_password}</p>
//                 <button type="submit" className="btn btn-primary mt-2" onClick={submitRegister}>Register</button>
//                 <p className='mt-3'>Already have an account? <span><a href="/login">Login</a></span></p>
//             </form>
//         </div>

//     );
// };

// export default RegisterPage;




















