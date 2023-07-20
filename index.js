const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const productRoutes = require("./src/routes/productRoute");

app.use(express.json());

// Add product routes
app.use("/api/v1/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
