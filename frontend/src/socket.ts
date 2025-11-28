import { io } from "socket.io-client";

export const socket = io('http://localhost:3000', {
  autoConnect: false,
  transports: ['websocket', 'polling'], // Try websocket first
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5
});
