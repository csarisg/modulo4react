import Producto from "./Producto";

function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 45 },
  ];

  return (
    <div>
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

