import React from 'react'
import { useNavigate } from 'react-router-dom'
import Spiner from './Spiner'


const Cliente = ({ cliente, cargando, handleEliminar}) => {

    const navigate = useNavigate()
    
    const  {nombre, empresa, email, telefono, notas, id } = cliente 
    
  return (
      cargando ? <Spiner/> : (
    <>
     <tr className='border-b hover:bg-slate-300 '>
          <td className='p-3'>{nombre}</td>
          <td className='p-3 space-y-2'>
            <p> <span className='text-gray-800 font-bold '>  Email: </span> {email} </p>
            <p> <span className='text-gray-800 font-bold '> Telefono: </span> {telefono} </p>
          </td>
          <td> {empresa}</td>
          <td className='space-y-2 lg:p-5 text-center'>
              <button
                  type='button'
                  className='mt-3 w-full lg:w-2/3 p-3 text-white bg-orange-600 hover:bg-orange-700 font-bold uppercase '
                  onClick={() => navigate(`./${id}`)}
              >
               Ver   
              </button>
              <button
                  type='button'
                  className='mt-3 w-full lg:w-2/3 p-3 text-white bg-blue-600 hover:bg-blue-700 font-bold uppercase '
                  onClick={() => navigate(`clientes/editar/${id}`)}
              >
               Editar   
              </button>
              <button
                  type='button'
                  className='mt-3 w-full lg:w-2/3 p-3 text-white bg-red-600 hover:bg-red-700 font-bold uppercase '
                  onClick={() =>  handleEliminar(id) }
              >
              Eliminar 
              </button>
          </td>
          

            
      </tr>
    </>
    )
  )
}

export default Cliente