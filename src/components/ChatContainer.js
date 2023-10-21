import React, { useState } from 'react';
import MyChatbotWidget from './MyChatbotWidget';
import bot from '../images/bot.png'

/**
 * ChatContainer component for managing the visibility of the chatbot.
 *
 * @component
 * @returns {JSX.Element} - The ChatContainer component.
 */
const ChatContainer = () => {
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    const toggleChatbotVisibility = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };
    const closeChatbot = () => {
        setIsChatbotVisible(false);
    };

    return (
        <div className="chat-container">
           {isChatbotVisible && (
            <div className="chat-container__closeButton" onClick={closeChatbot}>
                <i className="fa-solid fa-xmark chat-container__closeButton__closeBtn"></i>
            </div>
            )}
            <p className='chat-container__title'>How can I assist you?</p>
            <img className='chat-container__img-bot' src={bot} alt="bot" onClick={toggleChatbotVisibility} />
            {isChatbotVisible && <MyChatbotWidget isVisible={isChatbotVisible} onClose={toggleChatbotVisibility} />}
        </div>
    );
};

export default ChatContainer;
