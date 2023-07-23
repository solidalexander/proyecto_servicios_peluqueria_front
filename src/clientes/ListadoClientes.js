import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoClientes() {

    const urlBase = "http://localhost:8081/rh-app/clientes";

    const[clientes, setClientes] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        const resultado = await axios.get(urlBase);
        console.log("Resultado cargar servicios");
        console.log(resultado.data);
        setClientes(resultado.data);
    }

    const eliminarCliente = async (id) => {
        await axios.delete(`${urlBase}/${id}`);
        cargarEmpleados();
    }

  return (
    <div className="container">
        <div className="container text-center" style={{margin: "30px"}}>
            <h3>Sistema de Servicios centro de Belleza</h3>
        </div>

        <table className="table table-striped table-hover align-middle">
        <thead className='table-dark'>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Clientes</th>
            <th scope="col">Servicio</th>
            <th scope="col">Precio</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {
            //Iteramos el arreglo de clientes
            clientes.map((cliente, indice) => (
                <tr key={indice}>
                <th scope="row">{cliente.idCliente}</th>
                <td>{cliente.nombre}</td>
                <td>{cliente.servicio}</td>
                <td><NumericFormat value={cliente.precio}
                    displayType={'text'}
                    thousandSeparator=',' prefix={'$'}
                    decimalScale={2} fixedDecimalScale/>
                </td>
                <td className='text-center'>
                    <div>
                        <Link to={`/editar/${cliente.idCliente}`}
                        className='btn btn-warning btn-sm me-3'>Editar</Link>
                        <button 
                        onClick={()=> eliminarCliente(cliente.idCliente)}
                        className='btn btn-danger btn-sm'
                        >Eliminar</button>
                    </div>
                </td>
            </tr>
            ))
            }
        </tbody>
        </table>

    </div>
  )
}
