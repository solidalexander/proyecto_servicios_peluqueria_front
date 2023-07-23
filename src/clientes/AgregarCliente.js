import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AgregarCliente() {
    let navegacion = useNavigate();

    const [cliente, setCliente]=useState({
        nombre:"",
        servicio:"",
        precio:""
    })

    const{nombre, servicio, precio} = cliente

    const onInputChange = (e) => {
        //spread operator ... (expandir los atributos)
        setCliente({...cliente, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8081/rh-app/clientes";
        await axios.post(urlBase, cliente);
        // Redirigimos a la pagina de inicio
        navegacion('/');
    }


  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Agregar cliente</h3>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" 
            id="nombre" name='nombre' required={true} 
            value={nombre} onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="servicio" 
                className="form-label">Servicio</label>
            <input type="text" className="form-control" 
            id="servicio" name='servicio'
            value={servicio} onChange={(e) => onInputChange(e)} />
        </div>
        <div className="mb-3">
            <label htmlFor="precio" 
                className="form-label">Precio</label>
            <input type="number" step="any" className="form-control" 
            id="precio" name='precio'
            value={precio} onChange={(e) => onInputChange(e)}/>
        </div>
        <div className='text-center'>
            <button type="submit" 
                className="btn btn-warning btn-sm me-3">Agregar</button>
            <a href='/' className='btn btn-danger btn-sm'>Regresar</a>    
        </div>
        </form>
    </div>
  )
}
