import { useState } from "react";
import { ethers } from "ethers";

export default function Login() {
  const [walletAddress, setWalletAddress] = useState("");
  const [ethBalance, setEthBalance] = useState(0);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        const balance = await provider.getBalance(address);
        setEthBalance(ethers.utils.formatEther(balance));
        redirectToGoogle();
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert(
        "MetaMask not detected. Please install MetaMask to use this feature."
      );
    }
  };

  const redirectToGoogle = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6">MetaMask Login</h1>
      <div className="flex space-x-4">
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Connect as Seller
        </button>
        <button
          onClick={connectWallet}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Connect as Buyer
        </button>
      </div>
      {walletAddress && (
        <div className="mt-8">
          <p className="font-semibold">Wallet Address:</p>
          <p>{walletAddress}</p>
          <p className="font-semibold">Total ETH Balance:</p>
          <p>{ethBalance} ETH</p>
        </div>
      )}
    </div>
  );
}
