import * as React from "react";

import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

interface WebChatProps {
  username?: string | null;
}

const WebChat = (props: WebChatProps) => {
  React.useEffect(() => {
    if (props.username) {
      addResponseMessage(`Bonjour ${props.username} !`);
      addResponseMessage(`Super cool ce composant.`);
      toggleWidget();
    }
  }, []);

  return (
    <div className="App">
      <Widget />
    </div>
  );
};

export default WebChat;
