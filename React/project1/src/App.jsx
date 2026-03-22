import './App.css'
import Card from "./components/Card.jsx"

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-5 p-4 rounded-xl text-center font-bold">
        Learn to integrate Tailwind
      </h1>
      
      <div className="flex gap-4">
        <Card />
        
      </div>
    </>
  )
}

export default App
