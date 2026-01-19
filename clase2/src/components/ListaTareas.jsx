function ListaTareas({ tareas }) {
  return (
    <>
      {tareas.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListaTareas;
