import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className='sm:flex  '>
      
      <div className='sm:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-2xl uppercase font-black text-center text-white'> <a href='/'> Crm Clientes </a></h2>
        
        <nav className='mt-10'>
          
          <Link
            className= {`${urlActual === '/clientes' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes" 
          > Clientes </Link>
       
          <Link
            className= {`${urlActual === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300`}
            to="/clientes/nuevo" 
          > Nuevo Cliente </Link>
        </nav> 

      </div>


      <div className='sm:w-3/4 p-10 sm:h-screen sm:overflow-y-scroll'>
      <Outlet/>
        
      
      </div>
      

    </div>
  )
}

export default Layout