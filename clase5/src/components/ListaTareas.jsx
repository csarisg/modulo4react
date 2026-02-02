function ListaTareas() {
  const tareas = [
    { id: 1, texto: "Estudiar React", completa: true },
    { id: 2, texto: "Leer apuntes", completa: false },
  ];

  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.texto}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;


