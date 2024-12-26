import './App.css'
import Card from "./components/Card"

function App() {
  return (
    <>
      <h1 className="bg-slate-800 text-white">Hey whats up</h1>
      <Card username="om" post="Newbee" imgURL="https://images.unsplash.com/photo-1709884732259-9f2f0a52288b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" />
      <Card/>
      <Card/>
    </>
  )
}

export default App
