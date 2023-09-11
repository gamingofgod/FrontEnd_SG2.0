import io from 'socket.io-client';

const URL = import.meta.env.VITE_BASE_SOCKET_URL;

export const socket = io(URL, {
    path: "/socket/sala",
    transports: ["websocket"],
});