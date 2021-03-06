import mongoose from "mongoose";

// URI 추가하기
mongoose.connect(URI);

const db = mongoose.connection;

const handleError = (error) => console.log("🚫 Error on connection:", error);
const handleOpen = () => console.log("✅ Connected to DB!");

db.on("error", handleError);
db.once("open", handleOpen);
