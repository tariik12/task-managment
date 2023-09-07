import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';



import { toast } from 'react-toastify';
import SocialLogin from '../../Components/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

    const from = location.state?.from?.pathname ||"/home";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
       
        singIn(data.email, data.password)
            .then((result) => {
              
                    console.log(result.user)
                    toast.success("Login success!")
                    navigate(from, {replace:true});
            })
            .catch(error => console.log(error.massage))
        
    }   
        
    return (
        <div className="hero min-h-screen bg-base-100 shadow-2xl pt-20 pb-14 " style={{ backgroundImage:
            `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
             url('https://img.freepik.com/premium-photo/colorful-vase-with-red-yellow-design-bottom_865967-463128.jpg?w=900&fbclid=IwAR0WB9Lb7sxelWOt_7WVbgNAjZYzFf1NGXSHHEDU3g0-olw5E8ZxJ2iPuZU')` }}>
       
            <div className="card px-5  max-w-sm shadow-2xl bg-[#87787855]">
              
            <SocialLogin/>
                <form onSubmit={handleSubmit(onSubmit)} className=" px-10 py-5 text-white">
                    <div className="">
                        <input type="Email" {...register('email', { required: true })} placeholder="✉ Email Address" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3" />
                        {errors.email && <p className='text-red-800'>Please enter Your Name</p>}
                    </div>
                    <div className="">
                        <input {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                        })} type="password" placeholder=" 🗝 password" className="bg-transparent border-b border-primary text-white::placeholder placeholder-white focus:outline-none py-3 w-full" />
                        {errors.password?.type === 'required' && <p className='text-red-800' >Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-800' >Password must be 6 charector</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-red-800' >Password must be 6 charector</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-800' >Password must be regular expression charector</p>}
                    </div>
                    <div className="form-control mt-3">
                        <div>Create New Account <Link to='/register' className='text-[#1589FF]'>Register</Link></div>
                        <input onSubmit={handleSubmit} type="submit" className='btn border-primary btn-sm mt-4 bg-[#1589FF]' value={'Login'} name="" id="" />

                    </div>
                </form>

               
            </div>
        
    </div>
  );
};

export default Login;