
import errors from './../../../public/error.json'
import Lottie from "lottie-react";
import { Link, useRouteError } from 'react-router-dom';


const Error = () => {
 
  const { error, status } = useRouteError()
  return (
    <div  className='bg-black p-10'>
     
      <div className="text-center  ">
  <div className=' text-2xl font-serif text-red-600'><strong>Error :</strong>  {error?.message} {status || 'Not Found Page' + 404}</div>
  <div >
  <Lottie className='w-1/2  h-[400px] mx-auto ' animationData={errors} loop={true} />
    
  </div>
  <div className="btn me-4 btn-sm border-none inner text-white "  style={{ background:`linear-gradient(to bottom, rgba(1, 123, 150, 1),rgba(30, 64, 71, 1)` }}> 
  <Link className=''
            to='/'
          >
            <button >Go To Home Page</button>
          
          </Link>
  </div>
</div>
       
    </div>
);
};

export default Error;