function ListaUsuarios() {
  const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
  ];

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
