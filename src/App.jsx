import React, { useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [ethBalance, setEthBalance] = useState(0);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        const balance = await provider.getBalance(address);
        setEthBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask to use this feature.');
    }
  };

  return (
    <div>
      <h1>MetaMask Wallet Information</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      <div>
        {walletAddress && <p>Wallet Address: {walletAddress}</p>}
        {ethBalance && <p>Total ETH Balance: {ethBalance} ETH</p>}
      </div>
    </div>
  );
}

export default App;
