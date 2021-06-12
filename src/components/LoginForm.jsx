import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-id': process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect credentials, Please try again...')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <div>
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                        <h2 className="error">{error}</h2>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginForm;