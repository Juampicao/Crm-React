import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spiner from '../components/Spiner';


const VerCliente = () => {

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

      
        <div>
         
            <> 
                {/* <Spiner/> */}
                <h1 className='text-blue-800 font-black uppercase text-2xl'> Ver cliente: </h1>
                <h2 className='mt-2 font-bold'> Informacion del cliente </h2>
                
              <div className='mt-5 grid grid-cols-1 text-xs xs:text-sm sm:text-lg lg:text-2xl space-y-3'> 
                <p className='font-bold  uppercase'> Cliente: <span className='font-normal '> {cliente.nombre} </span></p>     
                <p className='font-bold  uppercase'> Empresa: <span className='font-normal '>{cliente.empresa} </span></p>
                <p className='font-bold  uppercase'> Email: <span className='font-normal '>{cliente.email} </span></p>
                <p className='font-bold  uppercase'> Telefono: <span className='font-normal '>{cliente.telefono} </span></p>
                <p className='font-bold  uppercase'> Notas: <span className='font-normal '>{cliente.notas} </span></p> 
                </div>

                
            </>

                   
            </div> 
        
            
   )
}
 
export default VerCliente