// import "./db";
// import "./models/User";
import app from "./server";
import socketIO from "socket.io";

const PORT = 4000;

const handleListening = () =>
  console.log(`β Server listening on http://localhost:${PORT} π`);

const server = app.listen(PORT, handleListening);

// HTTP μλ² μμ web socket μλ² μμ± -> μλ²κ° κ°μλ νΈλν½μ΄ λ¬λΌμ OK
const io = socketIO(server);
