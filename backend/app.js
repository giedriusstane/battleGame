import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
import http from "http";
import { Server } from "socket.io";


const server = http.createServer(app);


const io = new Server(server, {

    cors: {
        origin: "http://localhost:5173",

    }
});



io.on("connection", (socket) => {
    socket.on("user_data", (data) => {
        console.log(data);
    })
})



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
