import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productoEditando, setProductoEditando] = useState(null);

  // Se ejecuta cada vez que cambia la lista de productos
  useEffect(() => {
    console.log("Productos actualizados:", productos);
  }, [productos]);

  // Memoriza la lista de productos filtrados segun la busqueda por descripcion o ID.
  const productosFiltrados = useMemo(() => {
    return productos.filter(
      (p) =>
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.id.toLowerCase().includes(busqueda.toLowerCase())
    );
  }, [productos, busqueda]);

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

  const eliminarProducto = useCallback((id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
