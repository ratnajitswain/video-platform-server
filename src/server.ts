import http from 'http';
import app from './app';
// import mongoose from 'mongoose';
import { Server, Socket } from 'socket.io';

const PORT = process.env.PORT || 3005;

// Create HTTP server using Express app
const server = http.createServer(app);

// Create Socket.io server instance
const io = new Server(server,{cors: {
  origin: "*",
  methods: ["GET", "POST"]
}});

// Socket.io event handlers
io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('message', (message: any) => {
    // Broadcast the received message to all other clients
    console.log(message)
    socket.broadcast.emit('message', message);
  });
});

// Define a route for handling root requests
app.get('/', (req, res) => {
  res.send('Hello');
});

// MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp')
//   .then(() => {
    // console.log('Connected to MongoDB');
    // Start the server after successful MongoDB connection
    server.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  // })
  // .catch((error: any) => {
  //   console.error('Error connecting to MongoDB:', error);
  // });
