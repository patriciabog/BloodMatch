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
    /**
     * State representing the visibility of the chatbot.
     * @type {[boolean, Function]}
     */
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
                <div className="close-button" onClick={closeChatbot}>
                    <i className="fa-solid fa-xmark closeBtn"></i>
                </div>
            )}
            <p>How can I assist you?</p>
            <img className='img-bot' src={bot} alt="" onClick={toggleChatbotVisibility} />
            {isChatbotVisible && <MyChatbotWidget isVisible={isChatbotVisible} onClose={toggleChatbotVisibility} />}
        </div>
    );
};

export default ChatContainer;
