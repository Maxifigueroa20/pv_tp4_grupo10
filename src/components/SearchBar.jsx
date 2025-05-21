const SearchBar = ({ busqueda, setBusqueda }) => {
  return (
    <input
      placeholder="Buscar por descripcion o ID"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="search"
    />
  );
};

export default SearchBar;
