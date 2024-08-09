import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAdsgram } from './UseAdgram';

function App() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');
  const onReward = useCallback(() => {
    alert('Reward');
  }, []);
  const onError = useCallback((result) => {
    alert(JSON.stringify(result, null, 4));
  }, []);
  const showAd = useAdsgram({ blockId: "1675", onReward, onError });


  const spinWheel = () => {
    setSpinning(true);
    setResult('');

    // Simulate spinning
    setTimeout(() => {
      setSpinning(false);
      const outcomes = ['Retry', '5 Points', '4 Points', 'Box', 'Sorry'];
      const randomIndex = Math.floor(Math.random() * outcomes.length);
      setResult(outcomes[randomIndex]);
    }, 2000); // Adjust duration for spinning effect
  };

  return (
    <div className="spinner-container">
       <script async src="https://telegram.org/js/telegram-widget.js?7"
        data-telegram-login="superinvestor_bot"
        data-size="large"
        data-radius="10"
        data-auth-url="https://t.me/superinvestor_bot/Arbitrage"
        data-request-access="write"></script>
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        <div className="segment" style={{ '--i': 0 }}>Retry</div>
        <div className="segment" style={{ '--i': 1 }}>5 Points</div>
        <div className="segment" style={{ '--i': 2 }}>4 Points</div>
        <div className="segment" style={{ '--i': 3 }}>Box</div>
        <div className="segment" style={{ '--i': 4 }}>Sorry</div>
        <div className="pointer">
          <img src={logo} alt='logo' className='App-logo' />
        </div>
      </div>
      <button onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
      {result && <h2>{result}</h2>}
      <button onClick={showAd}>Show Ad</button>
    </div>
  );
}

export default App;