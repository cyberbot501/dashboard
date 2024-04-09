import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const navigate = useNavigate(); // Access the navigation function

        const onSubmit = (data) => {
            console.log(data);
            navigate('/dashboard'); 
        };

    
      console.log(watch("example"));

  return (
    <div className=''>
        <h1 className='text-center font-black text-[30px] font-serif mt-10 text-[#0f4416]'>LOGIN TO DASHBOARD</h1>
        <div className=' py-[60px] px-[350px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-12 border-[1px] bg-[#5B5B5B20] h-[450px] w-[650px] shadow-2xl px-[80px] '>
                <input type='text' placeholder='username'  className='w-[400px] ml-[50px] h-[55px] rounded-[10px] outline-none font-medium text-[18px] mt-[100px] text-center text-[#5B5B5B90]'         {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}/>
                {errors.firstName?.type === "required" && (
                    <p role="alert" className='text-red-700 mt-[-30px] text-center mb-[-30px]'>Username is required</p>
                )}


                <input type='password' placeholder='password' className='w-[400px] h-[55px] ml-[50px] rounded-[10px] outline-none font-medium text-[18px] text-center text-[#5B5B5B90]'  {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"} />
                 {errors.password?.type === "required" && (
                    <p role="alert" className='text-red-700 mt-[-30px] text-center mb-[-30px]'>Password is required</p>
                )}
                <button title="Submit" onClick
                ={handleSubmit(onSubmit)}  className='border-[2px] border-[#0f4416] bg-[#0f4416] font-medium text-[18px] w-[500px] h-[40px] text-white rounded-[15px]'>Submit</button>
            </form>
        </div>
    </div>
  )
}
