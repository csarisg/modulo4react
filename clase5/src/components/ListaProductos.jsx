import Producto from "./Producto";

function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Cuaderno", precio: 80 },
    { id: 2, nombre: "Mochila", precio: 150 },
  ];

  return (
    <div>
      <h2>Productos</h2>
      {productos.map((prod) => (
        <Producto
          key={prod.id}
          nombre={prod.nombre}
          precio={prod.precio}
        />
      ))}
    </div>
  );
}

export default ListaProductos;


