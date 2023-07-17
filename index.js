const express = require("express");
const app = express();
const productRoutes = require("./routes/Product.route.js");

app.use(express.json());

// Add product routes
app.use("/api", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
