function ListaFrutas() {
  const frutas = [
    { id: 1, nombre: "Manzana" },
    { id: 2, nombre: "Banana" },
    { id: 3, nombre: "Naranja" },
  ];

  return (
    <ul>
      {frutas.map((fruta) => (
        <li key={fruta.id}>{fruta.nombre}</li>
      ))}
    </ul>
  );
}

export default ListaFrutas;
