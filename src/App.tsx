import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <section id="center">
        <div>
          <h1>The Film Shelf</h1>
          <p>
            Explore, discover, and share your favorite movies with The Film Shelf.
          </p>
        </div>
      </section>
    </>
  )
}

export default App
