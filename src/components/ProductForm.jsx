import { useState, useEffect } from "react";

const ProductForm = ({ agregarProducto, editarProducto, productoEditando }) => {
  const [form, setForm] = useState({
    descripcion: "",
    precioUnitario: "",
    descuento: "",
    stock: "",
  });

  useEffect(() => {
    if (productoEditando) {
      setForm(productoEditando);
    } else {
      setForm({
        descripcion: "",
        precioUnitario: "",
        descuento: "",
        stock: "",
      });
    }
  }, [productoEditando]);

  const handleChange = (e) => {
    const nombreDelCampo = e.target.name;
    const nuevoValor = e.target.value;

    setForm({ ...form, [nombreDelCampo]: nuevoValor });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const descripcion = form.descripcion;
    const precioUnitario = parseFloat(form.precioUnitario);
    const descuento = parseFloat(form.descuento);
    const stock = parseInt(form.stock);

    const precioConDescuento = precioUnitario * (1 - descuento / 100);

    const producto = {
      descripcion,
      precioUnitario,
      descuento,
      precioConDescuento,
      stock,
      id: form.id,
    };

    if (productoEditando) {
      editarProducto(producto);
    } else {
      agregarProducto(producto);
    }

    console.log("Producto listo:", producto);

    setForm({
      descripcion: "",
      precioUnitario: "",
      descuento: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="campo">
        <label className="etiqueta">Descripción</label>
        <input
          name="descripcion"
          className="entrada"
          placeholder="Ej: Lapicera azul"
          value={form.descripcion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label className="etiqueta">Precio Unitario</label>
        <input
          name="precioUnitario"
          type="number"
          className="entrada"
          placeholder="Ej: 100"
          value={form.precioUnitario}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label className="etiqueta">Descuento (%)</label>
        <input
          name="descuento"
          type="number"
          className="entrada"
          placeholder="Ej: 25"
          value={form.descuento}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label className="etiqueta">Stock</label>
        <input
          name="stock"
          type="number"
          className="entrada"
          placeholder="Ej: 50"
          value={form.stock}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="boton">
        {productoEditando ? "Guardar Cambios" : "Agregar Producto"}
      </button>
    </form>
  );
};

export default ProductForm;
