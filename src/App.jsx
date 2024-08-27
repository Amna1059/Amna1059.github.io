import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 

function Counter({ id, onIncrement }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement();
  };

  return (
    <div className="card p-3 m-2 shadow-sm" style={{ width: '200px' }}>
      <div className="card-body text-center">
        <h5 className="card-title">Counter {id}</h5>
        <button onClick={handleIncrement} className="btn btn-info mb-2">Increment</button>
        <div className="badge bg-secondary">{count}</div>
      </div>
    </div>
  );
}

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    setCounters([...counters, counters.length + 1]);
  };

  return (
    <div className="container mt-5">
      <header className="text-center mb-4">
        <h1 className="display-4 text-success mb-4">Counter of Counters</h1>
        <button onClick={addCounter} className="btn btn-primary mb-4">Create Counter</button>
        <div className="d-flex flex-wrap justify-content-center p-3 mr-5">
          {counters.map(id => (
            <Counter
              key={id}
              id={id}
              onIncrement={() => {}}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
