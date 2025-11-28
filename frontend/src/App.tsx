import { useEffect, useState } from 'react';
import { socket } from './socket';
import ChatROOM from './components/ChatRoom';
function App() {
  const [connected, setConnected] = useState<boolean>(false);

  console.log(socket);
  console.log(typeof socket);
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected to server");
      setConnected(true);
    })
    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
      setConnected(false);
    })
    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <>
      <ChatROOM />
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">E2EE Signal Chat</h1>
        <div className={`text-lg ${connected ? 'text-green-400' : 'text-red-400'}`}>
          {connected ? '🟢 Connected' : '🔴 Disconnected'}
        </div>
      </div>
    </>
  );
}

export default App;
