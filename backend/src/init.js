import app from "./server";

const PORT = 4000;

app.get("/", () => console.log("Getting /"));

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
