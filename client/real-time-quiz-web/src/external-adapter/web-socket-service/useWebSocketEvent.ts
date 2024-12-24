import { ServerSocket } from "@/external-resource/web-socket-service";
import { useEffect } from "react";

export function useWebSocketEvent<T = never>(eventName: string, eventHandler: (param: T) => void) {
  useEffect(() => {
    ServerSocket.on(eventName, eventHandler);

    return () => {
      ServerSocket.off(eventName, eventHandler);
    };
  }, [eventHandler]);
}
