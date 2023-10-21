import React, { useState } from 'react';

/**
 * UserInput component for capturing and handling user messages.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {Function} props.onUserMessage - Callback function to handle user messages.
 * @returns {JSX.Element} - The UserInput component.
 */
const UserInput = ({ onUserMessage }) => {
   const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUserMessage(inputText);
        setInputText('');
    };

    return (
        <form className="user-input" onSubmit={handleSubmit}>
            <textarea
                className='user-input__questionText'
                rows="1" 
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your question..."
            />
            <button type="submit"><i className="fa-solid fa-share iconBtn"></i></button>
        </form>
    );
};

export default UserInput;
