// Importación de módulos
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar solicitudes con JSON
app.use(express.json());

// Rutas
const productosRoutes = require("./routes/productos");
app.use("/api/productos", productosRoutes);

// Ruta raíz (opcional)
app.get("/", (req, res) => {
  res.send("Bienvenido a MirosBuy Backend");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
