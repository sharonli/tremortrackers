import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-filter duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl leading-tight">Vite + React</h1>
      <div className="card p-8">
        <button
          className="rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-gray-800 text-white transition-colors hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code className="text-purple-500">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App