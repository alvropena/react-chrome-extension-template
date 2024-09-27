import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Chrome Extension with React</h1>
      <button onClick={() => alert('Hello from the Chrome Extension!')}>Click Me</button>
    </div>
  );
};

export default App;
