// import "./db";
// import "./models/User";
import app from "./server";

const PORT = 4000;

const handleHome = (req, res) => {
  return res.status(200).send({ msg: "Successfully Answered." });
};

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.get("/", handleHome);
app.listen(PORT, handleListening);
