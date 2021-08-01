// import "./db";
// import "./models/User";
import app from "./server";
import socketIO from "socket.io";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

const server = app.listen(PORT, handleListening);

// HTTP 서버 위에 web socket 서버 생성 -> 서버가 같아도 트래픽이 달라서 OK
const io = socketIO(server);
