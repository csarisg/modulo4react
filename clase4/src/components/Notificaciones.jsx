function Notificaciones({ cantidad }) {
  if (cantidad > 0) {
    return <p>Tienes {cantidad} notificaciones</p>;
  }

  return null;
}

export default Notificaciones;
