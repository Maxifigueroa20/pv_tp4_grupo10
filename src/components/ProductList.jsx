import ProductItem from "./ProductItem";

const ProductList = ({ productos, eliminarProducto, setProductoEditando }) => {
  if (productos.length === 0)
    return <p className="nohay">No hay productos para mostrar.</p>;

  return (
    <ul className="lista">
      {productos.map((p) => (
        <ProductItem
          key={p.id}
          producto={p}
          eliminarProducto={eliminarProducto}
          setProductoEditando={setProductoEditando}
        />
      ))}
    </ul>
  );
};

export default ProductList;
