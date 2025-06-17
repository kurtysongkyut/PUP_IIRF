import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My Website</h1>
      <p>
        This website is accessible both on <strong>localhost</strong> and online!
      </p>
    </div>
  );
};

export default App;