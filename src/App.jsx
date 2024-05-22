import { useState } from 'react'
import './App.css'
import Gretings from './components/Greetings/Gretings'
// import MySentence from './components/MySentence'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Gretings appName="App9" fullName="Benjamin Ahmetovic"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App


// const jakub={
//   name:"Jakub",
//   age: 17,
// }

// const {name}=osoba