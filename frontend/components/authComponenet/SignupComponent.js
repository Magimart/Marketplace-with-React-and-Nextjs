import { useState } from 'react';
import {signup} from '../../apiActions/auth';




const SignupComponent = () => {


//                                                const values to use in the useState
        const [values, setValues] = useState({
                                         name: 'frederick',
                                         email: 'fm@gmail.com',
                                         password: 'magima12345',
                                         error: '',
                                         loading: false,
                                         message: '',
                                         showForm: true
        });

//                                                                                             destruct the values from the useState
    
                const {name, email, password, error, loading, message, showForm} = values;


//                                                                                              handle  inputs on submit and values onchange
                const handleSubmit =  e => {

                              e.preventDefault();
//                                                                                             console.table({ name, email, password, error, loading, message, showForm });
//                                                                                             we bring in Signup and before submitting the values we want to setValue
                               
                               setValues({ ...values,loading: true, error: false });
//                                                                                              create new user and if user is created .then() pass data to resetValues to clear strings in the form
                               const user = {name, email, password};

                               signup(user).then(data => {
 
                                     if(data.error) {                                          //--error--Uncaught (in promise) TypeError: Cannot read property 'error' of undefined

                                             setValues({...values, error: data.error, loading: false });
                                    
                                    } else {                                                   
//                                                                                             empty the form

                                            setValues({ ...values, 
                                                        name: '', 
                                                        email:'',
                                                        password:'',
                                                        error:'',
                                                        loading:false,
                                                        message: '',
                                                        showForm: false 
                                            });
                                    }
                                });              

                };




                 const handleChange = name => e => {
//                                                                               const value = e.target.value;     //--added

//                                                                               console.log(e.target.value);  
                    setValues({ ...values, error: false, [name]: e.target.value });
 
                 }; 
     
//                                                                                the form func and handle method
                 const signupForm = () => {



                           return (

                                <form onSubmit={handleSubmit}>
                                   <div className="form-group">
                                         <input
                                           value={name}
                                           onChange={handleChange('name')}
                                           type="text"
                                           className="form-control"
                                           placeholder="Type your name"
                                        />
                                   </div> 

                                   <div className="form-group">
                                       <input
                                          value={email}
                                          onChange={handleChange('email')}
                                          type="email"
                                          className="form-control"
                                          placeholder="Type your email"
                                       />
                                    </div>

                                   <div className="form-group">
                                        <input
                                          value={password}
                                          onChange={handleChange('password')}
                                          type="password"
                                          className="form-control"
                                          placeholder="Type your password"
                                       />
                                   </div>

                                   <div>
                                        <button className="btn btn-primary">Signup</button>
                                   </div>
                                </form>
                            );
                        };
            
           
                return (
        
        
                     <React.Fragment>
                        <div><h1>Signup Page</h1></div>

                           {signupForm()}

                     </React.Fragment>
        
                )
};
 
export default SignupComponent;


///-------------------------------------------------------------
//--------------------------with isAuth
//--------------------------------------------------------------

// import { useState, useEffect } from 'react';
// import { signup, isAuth } from '../../actions/auth';
// import Router from 'next/router';

// const SignupComponent = () => {
//     const [values, setValues] = useState({
//         name: 'Ryan',
//         email: 'ryan@gmail.com',
//         password: 'rrrrrr',
//         error: '',
//         loading: false,
//         message: '',
//         showForm: true
//     });

//     const { name, email, password, error, loading, message, showForm } = values;

//     useEffect(() => {
//         isAuth() && Router.push(`/`);
//     }, []);

//     const handleSubmit = e => {
//         e.preventDefault();
//         // console.table({ name, email, password, error, loading, message, showForm });
//         setValues({ ...values, loading: true, error: false });
//         const user = { name, email, password };

//         signup(user).then(data => {
//             if (data.error) {
//                 setValues({ ...values, error: data.error, loading: false });
//             } else {
//                 setValues({
//                     ...values,
//                     name: '',
//                     email: '',
//                     password: '',
//                     error: '',
//                     loading: false,
//                     message: data.message,
//                     showForm: false
//                 });
//             }
//         });
//     };

//     const handleChange = name => e => {
//         setValues({ ...values, error: false, [name]: e.target.value });
//     };

//     const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
//     const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
//     const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

//     const signupForm = () => {
//         return (
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <input
//                         value={name}
//                         onChange={handleChange('name')}
//                         type="text"
//                         className="form-control"
//                         placeholder="Type your name"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <input
//                         value={email}
//                         onChange={handleChange('email')}
//                         type="email"
//                         className="form-control"
//                         placeholder="Type your email"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <input
//                         value={password}
//                         onChange={handleChange('password')}
//                         type="password"
//                         className="form-control"
//                         placeholder="Type your password"
//                     />
//                 </div>

//                 <div>
//                     <button className="btn btn-primary">Signup</button>
//                 </div>
//             </form>
//         );
//     };

//     return (
//         <React.Fragment>
//             {showError()}
//             {showLoading()}
//             {showMessage()}
//             {showForm && signupForm()}
//         </React.Fragment>
//     );
// };

// export default SignupComponent;


