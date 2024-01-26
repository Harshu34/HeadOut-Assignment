
// importing use state to change the current state of the object to the given file name as input 
import React, { useState } from 'react';
import './App.css';

function App() {
  const [fileName, setFileName] = useState('');
  const [lineNumber, setLineNumber] = useState('');
  const [result, setResult] = useState('');

const fetchData = async () => {
  try {
    const response = await fetch(`/data?n=${fileName}&m=${lineNumber}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status} status`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } else {
      const data = await response.text();
      setResult(data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



// for front end
  return (
    <div className="App">
      <h1>MERN Stack HTTP Server</h1>
      <label>
        File Name:
        <input type="text" value={fileName} onChange={(e) => setFileName(e.target.value)} />
      </label>
      <label>
        Line Number (optional):
        <input type="text" value={lineNumber} onChange={(e) => setLineNumber(e.target.value)} />
      </label>
      <button onClick={fetchData}>Fetch Data</button>
      <div>
        <h2>Result:</h2>
        <pre>{result}</pre>
      </div>
    </div>
  );
}

export default App;

