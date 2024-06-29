import React, { useEffect } from 'react';
function App() {
  //o useEffect só pode retornar uma função.
  useEffect(() => {
    return () => {
      console.log('mostrou');
      
    }
  }, [])
  
  return (
    <div>
      
    </div>
  );
}

export default App;
