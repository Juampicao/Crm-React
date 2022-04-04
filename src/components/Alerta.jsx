import { ErrorMessage } from 'formik'
import React from 'react'


// 6 Le pongo children para que sea GENERICO y pueda ir modificando todo personalizado.
const Alerta = ({children}) => {
  return (
      <div className='mb-3 text-center bg-red-600 p-2 text-white font-bold uppercase'>
          
          {children}

    </div>
  )
}

export default Alerta