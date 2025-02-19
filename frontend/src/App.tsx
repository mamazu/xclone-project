import { useCallback, useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';

const ws = new WebSocket('ws://localhost:3030/echo')
function App() {
    const [messages, setMessages] = useState<Array<string>>([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        ws.onmessage = (event) => {
            console.log(event.data);
            setMessages([...messages, event.data]);
        }
        ws.addEventListener('open', () => {
            setReady(true);
        });
    }, []);

    const stuff = useCallback(() => {
        ws.send('Message');
    }, []);
    return (
        <div className="text-black">
            <Menu />
            <main className="text-white w-[90%] mx-auto">
                {ws.url} (Ready: {ready ? 'true' : 'false'})
                <br />
                <h3 className="text-xl font-bold">Chat</h3>
                <div className="p-1 bg-white">{messages.map(e => <p>{e}</p>)}</div>
                <button onClick={stuff}>Send message</button>
            </main>
        </div>
    )
}

export default App
