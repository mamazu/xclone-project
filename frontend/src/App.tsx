import { useCallback, useEffect, useState } from 'react';
import './App.css'
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
        <>
            <Menu />
            {ws.url} (Ready: {ready ? 'true' : 'false'})
            <br />
            <div>{messages.map(e => <p>{e}</p>)}</div>
            <button onClick={stuff}>Send message</button>
        </>
    )
}

export default App
