import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'
import BookContainer from './BookContainer'

export default function App() {

  /*const initialBooks = [
    { name: "Meditaciones", author: "Marco Aurelio"},
    { name: "El Gen Egoísta", author: "Richard Dawkins"},
    { name: "20.000 Leguas de Viaje Submarino", author: "Julio Verne"}
  ]*/

  const [books, setBooks] = useState([])

  const addNewBook = (newBook) => {
    setBooks(prevBooks => [...prevBooks, newBook]);
    document.getElementById("book-name").value = "";
    document.getElementById("book-author").value = "";
  };

  return (
    <>
      <h2>This is BOOKARY, your private library software</h2>
      <div className='book-form'>
        <input type="text" className="form-input" id="book-name" placeholder="Enter book name here..."/> 
        <input type="text" className="form-input" id="book-author" placeholder="Enter book author here..."/>
        <button id="save-button" className="form-input" onClick={() => addNewBook({ name: document.getElementById("book-name").value, author: document.getElementById("book-author").value })}>Save</button>
      </div>
      <BookContainer books={books} setBooks={setBooks}></BookContainer>
    </>
  )
}

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
