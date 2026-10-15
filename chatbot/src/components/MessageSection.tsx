function MessageSection({ message, sender }) {
  return (
    <div>
      {sender === "robot" && (
        <img
          width="50"
          src="https://supersimple.dev/projects/chatbot/robot.png"
        />
      )}
      {message}
      {sender === "user" && (
        <img
          width="50"
          src="https://supersimple.dev/projects/chatbot/user.png"
        />
      )}
    </div>
  );
}

export default MessageSection;