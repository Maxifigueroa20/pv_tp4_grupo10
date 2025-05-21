import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productoEditando, setProductoEditando] = useState(null);

  const agregarProducto = useCallback((producto) => {
    setProductos((prev) => [
      ...prev,
      { ...producto, id: Date.now().toString() },
    ]);
  }, []);

  const editarProducto = useCallback((productoActualizado) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === productoActualizado.id ? productoActualizado : p
      )
    );
    setProductoEditando(null);
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
