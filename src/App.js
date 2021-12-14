import logo from './logo.svg';
import './App.css';
import { useFetch } from './useFetch'
import { useEffect } from 'react';
import CardComponent from './CardComponent';
const urlLink = 'http://localhost:8000/data'
function App() {
  const { data, loading } = useFetch(urlLink)

  return (
    <div className="App">
      { loading ? 'loading . . . ': <CardComponent data={data} />}
    </div>
  );
}

export default App;
