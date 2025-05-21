import { useState } from "react";

const ProductForm = () => {
  const [form, setForm] = useState({
    descripcion: "",
    precioUnitario: "",
    descuento: "",
    stock: "",
  });

  const handleChange = (e) => {
    const nombreDelCampo = e.target.name;
    const nuevoValor = e.target.value;

    setForm({ ...form, [nombreDelCampo]: nuevoValor });
  };

  return (
    <form className="formulario">
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
    </form>
  );
};

export default ProductForm;
