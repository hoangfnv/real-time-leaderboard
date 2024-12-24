import { io } from "socket.io-client";

const WEB_SOCKET_SERVICE_URL = import.meta.env.VITE_WEB_SOCKET_SERVICE_URL;

export const ServerSocket = io(WEB_SOCKET_SERVICE_URL, {
  autoConnect: false,
  reconnection: true,               // Enable reconnection
  reconnectionAttempts: Infinity,   // Unlimited reconnection attempts
  reconnectionDelay: 1000,          // 1 second delay between reconnections
  reconnectionDelayMax: 5000,       // Max delay 5 seconds
  timeout: 20000,                   // Timeout for initial connection
});

