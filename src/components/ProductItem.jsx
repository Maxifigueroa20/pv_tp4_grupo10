const ProductItem = ({ producto, eliminarProducto, setProductoEditando }) => {
    return (
        <li className="producto">
        <div className="detalle">
            <p className="nombre">{producto.descripcion}</p>
            <p>ID: {producto.id}</p>
            <p>
                Precio: ${producto.precioUnitario} | Descuento: {producto.descuento}%
                | Final: ${producto.precioConDescuento.toFixed(2)}
            </p>
            <p>Stock: {producto.stock}</p>
        </div>
        <div className="acciones">
            <button
                onClick={() => setProductoEditando(producto)}
                className="boton chico editar"
            >
                Editar
            </button>
            <button
                onClick={() => eliminarProducto(producto.id)}
                className="boton chico eliminar"
            >
                Eliminar
            </button>
        </div>
      </li>
    )
}

export default ProductItem