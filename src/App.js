import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () => {
	if (!localStorage.getItem('username')) return <LoginForm />

	const handleLogout = () => {
		localStorage.setItem('username', '');
		localStorage.setItem('password', '');
		window.location.reload();
	}

	return (
		<>
			<div style={{height: '2vh'}}>
				<button style={{position: 'absolute', right: 0}} onClick={handleLogout}>Logout</button>
			</div>
			<ChatEngine
				height='98vh'
				projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
				userName={localStorage.getItem('username')}
				userSecret={localStorage.getItem('password')}
				renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
			/>
		</>
	);
}

export default App;
