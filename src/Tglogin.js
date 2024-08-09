// src/TelegramLoginButton.js
import React from 'react';
import TelegramLogin from 'react-telegram-login';
import './TelegramLoginButton.css'; // Add any custom styles here

const TelegramLoginButton = () => {
  const onTelegramLogin = (response) => {
    console.log('Telegram login response:', response);
    // Handle the response here
  };

  return (
    <div className="telegram-login-button">
      <TelegramLogin
        botName="YOUR_BOT_USERNAME" // Replace with your bot's username
        buttonSize="large"
        dataOnauth={onTelegramLogin}
      />
    </div>
  );
};

export default TelegramLoginButton;
