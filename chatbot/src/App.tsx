import React from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = React.useState([
    {
      id: 1,
      message: "Olá! Como posso ajudar você hoje?",
      sender: "robot",
    },
    {
      id: 2,
      message: "Quero saber como funciona o Angular Signals.",
      sender: "user",
    },
    {
      id: 3,
      message:
        "Angular Signals é um sistema reativo para gerenciamento de estado.",
      sender: "robot",
    },
    {
      id: 4,
      message: "Eles substituem completamente o RxJS?",
      sender: "user",
    },
    {
      id: 5,
      message: "Não. Eles complementam o RxJS e cada um tem seus casos de uso.",
      sender: "robot",
    },
    {
      id: 6,
      message: "Pode me mostrar um exemplo simples?",
      sender: "user",
    },
    {
      id: 7,
      message:
        "Claro! Você pode criar um signal usando signal(0) e atualizá-lo com set() ou update().",
      sender: "robot",
    },
    {
      id: 8,
      message: "E como funciona um computed?",
      sender: "user",
    },
    {
      id: 9,
      message:
        "Um computed deriva seu valor automaticamente a partir de um ou mais signals.",
      sender: "robot",
    },
    {
      id: 10,
      message: "Perfeito, era isso que eu precisava. Obrigado!",
      sender: "user",
    },
  ]);

  return (
    <>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </>
  );
}

export default App;
