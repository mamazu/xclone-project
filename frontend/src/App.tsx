import { useCallback, useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import useWebSocket from 'react-use-websocket';

const ws = new WebSocket('ws://localhost:3030/')
function App() {
    const { sendMessage, lastMessage } = useWebSocket('ws://localhost:3030');
    const [messageHistory, setMessageHistory] = useState<string[]>([]);

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage.data));
        }
    }, [lastMessage]);

    const stuff = useCallback(() => {
        sendMessage('Message');
    }, []);

    return (
        <div className="text-black">
            <Menu />
                <button className="p-1 rounded bg-white text-black" onClick={stuff}>Send message</button>
            <main className="text-white w-[90%] mx-auto flex flex-col gap-2">
                {ws.url} (Ready: {ws.readyState})
                <br />
                <h3 className="text-xl font-bold">Chat</h3>
                <div className="p-1 bg-white text-black flex gap-1 flex-col">
                    {messageHistory.map((e, index) => <p key={index}>{e}</p>)}
                </div>
            </main>
        </div>
    )
}

export default App
