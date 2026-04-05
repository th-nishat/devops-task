const express = require("express");
const app = express();

app.use(express.json());

// Request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// GET endpoint
app.get("/status", (req, res) => {
  res.json({ status: "ok" });
});

// POST endpoint
app.post("/data", (req, res) => {
  res.json({ received: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});