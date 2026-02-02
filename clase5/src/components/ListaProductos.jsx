function Producto({ nombre, precio }) {
  return (
    <div>
      <p>{nombre}</p>
      <p>${precio}</p>
    </div>
  );
}

export default Producto;
