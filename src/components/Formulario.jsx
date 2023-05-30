import React from 'react';
import './Formulario.css';

const Formulario = () => {
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [lista, setLista] = React.useState([]);

    const registrarDatos = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            alert('Ingrese nombre');
            return;
        }
        if (!apellido.trim()) {
            alert('Ingrese apellido');
            return;
        }
        setLista([
            ...lista,
            { nombre: nombre, apellido: apellido }
        ]);
        setNombre('');
        setApellido('');
    }

    const eliminarUsuario = (index) => {
        const newList = [...lista];
        newList.splice(index, 1);
        setLista(newList);
    }

    const editarUsuario = (index) => {
        const usuario = lista[index];
        setNombre(usuario.nombre);
        setApellido(usuario.apellido);
        eliminarUsuario(index);
    }

    return (
        <div className='container'>
            <h2>Formulario</h2>
            <form onSubmit={registrarDatos}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text"
                        id="nombre"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text"
                        id="apellido"
                        className="form-control"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <div className='d-grid gap-2'>
                    <button className='btn btn-primary'
                        type='submit'>Registrar</button>
                </div>
            </form>
            <hr />
            <h2>Listado de usuarios</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((elemento, index) => (
                            <tr key={index}>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.apellido}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm me-2'
                                        onClick={() => eliminarUsuario(index)}>
                                        Eliminar
                                    </button>
                                    <button className='btn btn-warning btn-sm'
                                        onClick={() => editarUsuario(index)}>
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Formulario;
