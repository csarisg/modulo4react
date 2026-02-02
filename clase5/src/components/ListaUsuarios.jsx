import { useState } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
    { id: 3, nombre: "María", edad: 28 },
  ]);

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>
          {usuario.nombre} - {usuario.edad} años
          <button onClick={() => eliminarUsuario(usuario.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;
