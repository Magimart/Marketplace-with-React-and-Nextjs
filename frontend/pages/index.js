import Link from 'next/link';
import Layout from "../components/Layout";


// cd Desktop/projects/next-express-app/siteapp


const HomePage = () => {
    
    
    return (

        <Layout> 
          <div><h1>Magima App</h1></div>
          <div>
               <Link href='/signin'><button>signin</button></Link>
               <Link href='/signup'><button>Signup</button></Link>   
          </div>
        </Layout>

    );
       
};

export default HomePage;



