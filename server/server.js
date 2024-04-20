const express = require("express");
const morgan = require("morgan");
const app = express();

const middleware = require("./middleware/error");

// error handling
app.use(middleware);

// Log Request
app.use(morgan("combined"));

// Parse Request To Json Object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const openAiRoutes = require("./routes/interpretorRoute");

app.use("/api", openAiRoutes);

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const port = process.env.PORT;

app.listen(port, () => console.log(`app running on ${port}`));
