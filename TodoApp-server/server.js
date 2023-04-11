/* dotenv */
require("dotenv").config();

/* server starting */
const app = require("./app");
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/* mongodb connection */
const mongoose = require("mongoose");
mongoose.set('strictQuery', false); // for warning
mongoose
  .connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the db!");
  })
  .catch((err) => {
    console.log(err);
  });
