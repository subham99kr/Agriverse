import { useState } from 'react'
import '../styles/Help.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = { 
  "role": "system", "content": "your name is edukrishak, You are supposed to answer questions only regarding agriculture"
}

function Help() {
  const [messages, setMessages] = useState([
    {
      message: "Sorry, This feature has been Disable due to lack of funds.",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {

    // Map chatMessages to the required API format
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage, 
        ...apiMessages 
      ]
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();

      // Safely access the response data
      const reply = data?.choices?.[0]?.message?.content;

      if (reply) {
        setMessages([...chatMessages, {
          message: reply,
          sender: "ChatGPT"
        }]);
      } else {
        console.error("Error: No message content returned from API.");
        setMessages([...chatMessages, {
          message: "Sorry, This feature has been Disable due to lack of funds.",
          sender: "ChatGPT"
        }]);
      }

    } catch (error) {
      console.error("Error while fetching response from OpenAI:", error);
      setMessages([...chatMessages, {
        message: "There was an error processing your request. Please try again later.",
        sender: "ChatGPT"
      }]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div className="bg-white md:px-6">
      <div className="h-[85vh] w-full mx-auto">
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="kissanhelp is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Help;
