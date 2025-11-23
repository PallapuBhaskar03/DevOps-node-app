const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from DevOps CI/CD Demo — Pallapu Bhaskar 🚀");
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
