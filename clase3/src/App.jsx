import Saludo from "./components/Saludo";
import Boton from "./components/Boton";
import Caja from "./components/Caja";
import Layout from "./components/Layout";

function App() {
  const manejarClick = () => {
    alert("¡Botón clickeado!");
  };

  return (
    <Layout
      header={<h1>Mi App en React</h1>}
      content={
        <>
          <Saludo nombre="Sara" />
          <Saludo />

          <Boton texto="Hacer click" onClick={manejarClick} />

          <Caja>
            <h3>Título dentro de Caja</h3>
            <p>Este es un párrafo envuelto con children.</p>
          </Caja>
        </>
      }
      footer={<p>© 2026 - Footer</p>}
    />
  );
}

export default App;
