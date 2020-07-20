import Link from 'next/link';
import Layout from "../components/Layout";
import SignInComponent from '../components/authComponenet/signinComponent';


const SignIn = () => {
    
    
    return (

        <Layout> 
               <h1>Signin Page</h1>
               <SignInComponent/>

       </Layout>

    );
       
};

export default SignIn;







