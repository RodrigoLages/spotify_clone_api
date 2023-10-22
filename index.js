require("dotenv").config();
const express = require("express");
var cors = require("cors"); //cors
const app = express();

app.use(cors()); //cors
app.options("*", cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
  return res.status(200).json("UEPA");
});

app.all("*", require("./src/routes/index"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
