import React, { useEffect,useState,  } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Spiner from '../components/Spiner'


const EditarCliente = () => {

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
   
    useEffect(() => {
        // setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()


                setCliente(resultado)
                
            } catch (error) {

                console.log(error)
            }  
            
         setCargando(!cargando)
        
        } 
        obtenerClienteAPI();
    }, [])
 
  return (
     cargando ? <Spiner/> : (
    <div>

      <h1 className='text-4xl text-blue-900 font-black'>Editar Clientes </h1>
      <p className='mt-2'> Edita tus clientes desde aqui</p>

        {cliente?.nombre ? (
          <Formulario
        cliente={cliente}
        cargando={cargando}
          />
        ) : <h2 className='text-uppercase font-bold text-2xl lg:text-4xl mt-10'>  ERROR: Cliente ID no valido </h2>}
     


      </div>
      )
  )
}


export default EditarCliente