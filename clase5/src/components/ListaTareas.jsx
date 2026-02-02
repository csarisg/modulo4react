function ListaTareas() {
  const tareas = [
    { id: 1, titulo: "Estudiar React", completada: true },
    { id: 2, titulo: "Hacer ejercicio", completada: false },
    { id: 3, titulo: "Leer apuntes", completada: true },
  ];

  return (
    <ul>
      {tareas.map((tarea) => (
        <li
          key={tarea.id}
          style={{ color: tarea.completada ? "green" : "red" }}
        >
          {tarea.titulo}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
