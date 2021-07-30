import { useState } from 'react';
import './App.css';
import BooksList from './components/BooksList';
import useBooks from './hooks/useBooks';

function App() {

  const [inputQuery, setInputQuery] = useState("");
  const { books, totalItems, queryString, currentIndex, fetchBooks, fetchMore } = useBooks();

  const searchBooks = () => {
    if (inputQuery.trim() !== "") {
      fetchBooks(0, inputQuery);
    }
  }
  return (
    <div style={{display: 'flex', height: '100%', width: '100%', flexDirection: 'column', padding: 20}} >
      <div style={{display: 'flex', marginBottom: 20}} >
        <input value={inputQuery} onChange={(e) => setInputQuery(e.target.value)} placeholder="Search query" />
        <button onClick={searchBooks} >Search</button>
      </div>
      <div style={{display: 'flex'}} >
        <BooksList 
          books={books} 
          totalItems={totalItems} 
          queryString={queryString} 
          currentIndex={currentIndex} 
          fetchMore={fetchMore}
        />
      </div>
    </div>
  );
}

export default App;