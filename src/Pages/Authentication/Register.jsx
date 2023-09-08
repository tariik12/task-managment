import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
// import login from '../../assets/login.webp'
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const [toggle2, setToggle2] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
       
            .then(result => {
                console.log(result.user)  
                console.log(data.name, data.photoURL)
                updateUserProfile(data.name, data.photoURL)
                toast.success('SingIn Success')
                saveUserToLocalStorage(data)
                navigate('/home')
                reset()
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`);
            }) 
            
                    .catch(error => console.log(error.massage))
      

        const saveUserToLocalStorage = (userData) => {
            const existingTasks = JSON.parse(localStorage.getItem('users')) || [];
            existingTasks.push(userData);
            localStorage.setItem('users', JSON.stringify(existingTasks));
          };


    };
    return (
        <div className="hero min-h-screen bg-base-100 shadow-2xl " style={{ backgroundImage:
            `linear-gradient(to bottom, rgba(21, 21, 21, 0.6),rgba(21, 21, 21, 0.6)),
             url('https://img.freepik.com/premium-photo/colorful-vase-with-red-yellow-design-bottom_865967-463128.jpg?w=900&fbclid=IwAR0WB9Lb7sxelWOt_7WVbgNAjZYzFf1NGXSHHEDU3g0-olw5E8ZxJ2iPuZU')` }}>

            <div className="hero-content flex-col">
                <div className="card px-5  max-w-sm shadow-2xl bg-[#87787855]">
                    <h3 className='text-4xl pt-5 font-serif'>Create Account</h3>
                   
                    <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-5">
                        <div className="">
                        
                            <input {...register('name', { required: true })} type="text" name="name" placeholder="Enter Your Name" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3" />
                            {errors.name && <p className='text-red-400'>Please enter Your Name</p>}
                        </div>
                        <div className="">
                            
                            <input {...register('photoURL', { required: true })} type="text" name="photoURL" placeholder="Enter Your Photo" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3" />
                            {errors.photoURL && <p className='text-red-400'>Please enter Your Photo url</p>}
                        </div>
                        <div className="">
                            
                            <input type="Email" {...register('email', { required: true })} placeholder="email" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3"/>
                            {errors.email && <p className='text-red-400'>Please enter Your Name</p>}
                        </div>
                        <div className="">
                           
                        {
                           toggle2? <FaRegEye className='z-10 absolute text-4xl ms-[180px]' onClick={() => { setToggle2(!toggle2) }}/>:
                            <FaRegEyeSlash className='z-10 absolute text-4xl ms-[180px] ' onClick={() => { setToggle2(!toggle2) }}/>
                        }
                            <input {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
                            })} type={toggle2 ? "text" : "password"} placeholder="password" className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3" />
                            {errors.password?.type === 'required' && <p className='text-red-700' >Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-700' >Password must be 6 charector</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-700' >Password must be 6 charector</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-700' >Password must be regular expression charector</p>}
                        </div>
                        <div className="">
          <textarea
            {...register('addBio')}
            name="addBio"
            className="bg-transparent w-full border-b border-primary text-white::placeholder focus:outline-none placeholder-white  py-3" 
           
            placeholder="Add Bio"
            rows="2"
          />
        </div>
                        <div className="form-control mt-6">
                            <div className='text-white'>Already have an account<Link to='/' className='text-[#1589FF]'> Login</Link></div>
                            <input onSubmit={handleSubmit} type="submit" className='btn border-primary btn-sm mt-4'  value={'SingIN'} name="" id="" />

                        </div>
                    </form>
               
                </div>
            </div>
        </div>
    );
};

export default Register;