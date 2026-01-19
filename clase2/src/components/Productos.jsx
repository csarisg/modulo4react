function Productos({ productos }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <tr key={index}>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>
              {producto.precio > 100 && <strong>Premium</strong>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Productos;
