import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3001');

function App() {
    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected with id:', socket.id);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <>  
        <h1>
          Hello users this is my First chat app
        </h1>
        </>
    );
}

export default App;
