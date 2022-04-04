import React, { useState } from 'react'
import { useEffect } from 'react'
import Cliente from '../components/Cliente';


const Inicio = () => {

     const [clientes, setClientes] = useState([]);


//--------------------- GET respuesta desde json-server -------------------------
  useEffect(() => {

    const obtenerClientesApi = async () => {
      try {
        const url = "http://localhost:4000/clientes"
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setClientes(resultado)
      } catch (error) {
        console.log(error)
      }
    }

    obtenerClientesApi();
  }, [])


  const handleEliminar = (id) => {
    console.log("Eliminando...", id)
  }
//--------------------- fin GET respuesta desde json-server -------------------------

  return (
     <>
      <h1 className='text-4xl text-blue-900 font-black'>Clientess</h1>
      <p className='mt-2'> Adminsitra tus clientes</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead>
          <tr className='bg-blue-800 text-white'>
            <th className='p-2'> Nombre </th>
            <th className='p-2'> Contacto </th>
            <th className='p-2'> Empresa </th>
            <th className='p-2'> Acciones </th>

          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            
            />
          ))}
        </tbody>
      
     </table>
      
    </>
  )
}

export default Inicio