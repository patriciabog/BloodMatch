import React, { useState } from 'react';
import MessageList from './ MessageList';
import UserInput from './ UserInput';
import responses from './data/responsesData';

const MyChatbotWidget = () => {
    const [messages, setMessages] = useState([]);
    const [isChatbotVisible] = useState(false);

    const checkKeyword = (message, keyword) => message.includes('donate') && message.includes(keyword);
    /**
 * Handles the user message and generates a response based on detected keywords.
 *
 * @param {string} userMessage - The user's message to process.
 * @returns {void}
 */
    const handleUserMessage = (userMessage) => {
        /**
    * Converts the user message to lowercase for case-insensitive comparison.
    * @type {string}
    */
        const lowerCaseMessage = userMessage.toLowerCase();
        let response;

        if (lowerCaseMessage.includes('hi')) {
            response = "Hello! I am Patty. How can I help you today?";
        } else if (checkKeyword(lowerCaseMessage, 'frequency')) {
            response = responses.frequency;
        } else if (checkKeyword(lowerCaseMessage, 'tattoo')) {
            response = responses.tattoo;
        } else if (checkKeyword(lowerCaseMessage, 'piercings')) {
            response = responses.piercings;
        } else if (checkKeyword(lowerCaseMessage, 'time')) {
            response = responses.time;
        } else if (checkKeyword(lowerCaseMessage, 'effects')) {
            response = responses.effects;
        } else if (lowerCaseMessage.includes('thanks')) {
            response = "You'are welkome!";
        } else {
            response = responses.default;
        }

        /**
     * Updates the state of messages with the user's message and the generated response.
     * @type {Array<object>}
     */
        setMessages([...messages, { text: userMessage, isUser: true }, { text: response, isUser: false }]);
    };

    return (
        <div className={`chat-widget ${isChatbotVisible ? 'visible' : ''}`}>
            <MessageList messages={messages} />
            <UserInput onUserMessage={handleUserMessage} />
        </div>
    );
};

export default MyChatbotWidget;
