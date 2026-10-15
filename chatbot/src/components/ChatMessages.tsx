import {useEffect, useRef} from "react";
import MessageSection from "./MessageSection";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerEl = chatMessagesRef.current;
    if (containerEl) {
      containerEl.scrollTop = containerEl.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div ref={chatMessagesRef} style={{ height:"90vh" , overflowY: "auto" }}>
      {chatMessages.map((m) => (
        <MessageSection message={m.message} sender={m.sender} key={m.id} />
      ))}
    </div>
  );
}

export default ChatMessages;