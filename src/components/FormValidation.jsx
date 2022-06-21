import React from 'react'
import { useForm } from 'react-hook-form'


export const FormValidation = () => {
    //A esto se le llama desestructuracion de  un objeto
    const {register, handleSubmit, formState:{errors}} = useForm()

    const customSubmit = (data)=>{
        console.log(data)
    }

  return (
    //esto es un fragment
    //dentro de handleSubmit paaso por parametro mi funcion para capturar todos los datos que se enviaran
     <>
        <h2>FOrmulario Validado</h2>
        
        <form onSubmit={handleSubmit(customSubmit)}  className='form-react'>
            <div className='form-control'>
                <label >Nombre</label>
                <input type="text" {...register('name', {required: true})} />
                {errors.name && <small className='fail'>El campo esta vacio</small>}
            </div>
            <div className='form-control'>
                <label >Email</label>
                <input type="email" {...register('email',{ pattern: /^[A-Za-z]+$/i })} />
                {errors.email && <small className='fail'> Ingrese correctamente un correo valido</small>}
            </div>
            <div className='form-control'>
                <label >Password</label>
                <input type="password" {...register('password')} />
            </div>
            <button type='submit'>Enviar</button>
        </form>

     </>
  )
}
