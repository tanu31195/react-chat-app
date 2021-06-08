import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
			height='100vh'
			userName={process.env.REACT_APP_CHAT_ENGINE_USERNAME}
			userSecret={process.env.REACT_APP_CHAT_ENGINE_PASSWORD}
			projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
  );
}

export default App;
