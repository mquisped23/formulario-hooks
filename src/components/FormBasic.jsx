import React from 'react'
import { useForm } from 'react-hook-form'


export const FormBasic = () => {
    //A esto se le llama desestructuracion de  un objeto
    const {register, handleSubmit} = useForm()

    const customSubmit = (data)=>{
        console.log(data)
    }

  return (
    //esto es un fragment
    //dentro de handleSubmit paaso por parametro mi funcion para capturar todos los datos que se enviaran
     <>
        <h2>FOrmulario Basico</h2>
        
        <form onSubmit={handleSubmit(customSubmit)}  className='form-react'>
            <div className='form-control'>
                <label >Nombre</label>
                <input type="text" {...register('name')} />
            </div>
            <div className='form-control'>
                <label >Email</label>
                <input type="email" {...register('email')} />
            </div>
            <div className='form-control'>
                <label >Password</label>
                <input type="text" {...register('password')} />
            </div>
            <button type='submit'>Enviar</button>
        </form>

     </>
  )
}
