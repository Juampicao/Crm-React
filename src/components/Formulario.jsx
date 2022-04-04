import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import Alerta from './Alerta'
import { useNavigate } from 'react-router-dom'
import Spiner from './Spiner'

// import Alerta from './Alerta'

const Formulario = ({cliente, cargando}) => {

    const navigate = useNavigate();

    // 2  Creando requisitos de validacion
    const nuevoClienteSchema = Yup.object().shape({

        // 3   Son los nombres de los inicial Values
        nombre: Yup.string()
            .min(3, "El nombre es muy corto")
            .max(20, "El nombre es muy largo")
            .required('El nombre es obligatorio'),
        
        empresa: Yup.string()
            
            .required('La empresa es  obligatorio'),
         email: Yup.string()
            .email("Asegurese de escribir correctamente el Correo")
            .required('El correo es  obligatorio'),
        
        telefono: Yup.number()
            .typeError("Solo números")
            .integer("Numero no valido")
            .positive("Numero no valido")
            .required('El Telefono es  obligatorio')
       
        
        
    })

    // --------------------- Json-Server ---------------------------

    const handleSubmit = async (valores) => {
        try {
            if (cliente.id) {
                // Editando un Registro en JSON
                const url2 = `http://localhost:4000/clientes/${cliente.id}`
            const respuesta = await fetch(url2, {
                method: 'PUT',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado)

                navigate("/clientes");
                

            } else {
                // Nuevo Registro en JSON
                const url2 = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url2, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            console.log(respuesta)
            const resultado = await respuesta.json()
            console.log(resultado)

            navigate("/clientes");
            }
        } catch (error) {
            console.log(error)

        }
    } 
    
    // --------------------- Json-Server ---------------------------

    
    return (
        cargando ? <Spiner/> : (
        <div>
            <div className='mt-5 px-5 py-10 rounded-md  shadow-md md:w-3/4 mx-auto'>
                <h1 className='uppercase text-center text-gray-600 font-bold text-xl'>{cliente?.nombre ? "Editar Cliente" : "Añadir Cliente"}</h1>

                <Formik
                    
                    // 1  Simula el STATE normal. 
                    initialValues={{
                        nombre: cliente?.nombre ?? "",
                        empresa: cliente?.empresa ?? "",
                        email: cliente?.email ?? "",
                        telefono: cliente?.telefono ?? "",
                        notas: cliente?.notas ?? "",     
                    }}
                    // Para editar el form
                    enableReinitialize={true}

                    // Resetear formulario con async y await. 
                    onSubmit={ async (values, {resetForm}) => {
                       await handleSubmit(values);
                       resetForm();
                    }}

                    // 5 Llamador a la funcion de validacion
                    validationSchema={nuevoClienteSchema}
                >
                    {/* parametros que vienen en el console log de formik. Touched  valida cuando salis del input.*/}
                    {({errors, touched}) => {
                        return (
                    <Form className='my-32'>
                       
                        <div className='mb-4 '>
                        <label htmlFor="nombre"> Nombre: </label>
                        <Field type="text" id="nombre" name="nombre" className="w-full block mt-2 p-3" placeholder="Nombre del cliente"
                        />         
                        </div>
                                 {/* 4 Condicional con llamado a Alerta.  */}
                                {errors.nombre && touched.nombre ? (
                                    <Alerta> {errors.nombre} </Alerta>
                                ): null }

                        <div className='mb-4'>
                        <label htmlFor="empresa"> Empresa </label>
                        <Field id="empresa" type="text" name="empresa" className="w-full block mt-2 p-3" placeholder="Empresa del cliente" />
                        </div> 
                                
                                 {errors.empresa && touched.empresa ? (
                                    <Alerta> {errors.empresa} </Alerta>
                                ): null }
                                
                        
                                
                        <div className='mb-4'>
                        <label htmlFor="email" className=''> E-mail: </label>
                        <Field type="text "id="email" name="email" className="w-full block mt-2 p-3" placeholder="Email del cliente"/>
                        </div>
                               
                                {errors.email && touched.email ? (
                                    <Alerta> {errors.email} </Alerta>
                                ): null }
                            
                                

                        <div className='mb-4'>
                        <label htmlFor="telefono"> Telefono: </label>
                        <Field id="telefono" type="tel" name="telefono" className="w-full block mt-2 p-3" placeholder="Telefono del cliente" />
                         </div>
                                
                                {errors.telefono && touched.telefono ? (
                                <Alerta> {errors.telefono} </Alerta>
                                ): null }

                        
                        <div className='mb-4'>   
                        <label htmlFor="notas"> Notas: </label>
                        <Field as="textarea" id="notas" name="notas" type="text"className="w-full block mt-2 p-3 h-40" placeholder="Notas del ciente" />
                        </div>
                            
                                  {errors.notas && touched.notas ? (
                                    <Alerta> {errors.notas} </Alerta>
                                ) : null}
                                
                        <input type="submit" name="" id="submit" value={cliente?.nombre ? "Editar Cliente" : "Agregar Cliente"} className='w-full bg-blue-900 py-2 uppercase text-white cursor-pointer hover:bg-blue-800' />
                        
                       

                        </Form>
                        )}}
                </Formik>


            </div>
        </div>
        )
  )
}

Formulario.defaultProps = {
    cliente: {},
    cargando: false
}

export default Formulario