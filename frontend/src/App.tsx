import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-end">
        <ConnectButton />
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="mb-6 w-full max-w-md px-4">
          <h1 className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">
            Let's Send a CrossChain Message
          </h1>
          <input
            type="text"
            id="large-input"
            placeholder="Enter your message here"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </main>
    </div>
  )
}

export default App