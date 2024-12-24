import { ServerSocket } from "@/external-resource/web-socket-service";
import { useEffect, useState } from "react";

export function useWebSocketConnection() {
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    ServerSocket.on('connect', onConnect);
    ServerSocket.on('disconnect', onDisconnect);

    return () => {
      ServerSocket.off('connect', onConnect);
      ServerSocket.off('disconnect', onDisconnect);
    };
  }, []);

  useEffect(() => {
    ServerSocket.connect();

    return () => {
      ServerSocket.disconnect();
    };
  }, []);

  return {
    isConnected,
  }
}
