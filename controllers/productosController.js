// Controlador: Obtener todos los productos
exports.obtenerProductos = (req, res) => {
  res.json([
    { id: 1, nombre: "Mouse Gamer" },
    { id: 2, nombre: "Teclado Mecánico" },
  ]);
};
