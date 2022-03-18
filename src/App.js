import { useState } from 'react';
import MyContext from './components/Context';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import './index.css'

function App() {
  const [nombre, setNombre] = useState("Gleen")
  return (
    <MyContext.Provider value={{
      setNombre,
      nombre
    }}>
      <Wrapper>
          <Navbar/>
          <FormWrapper/>
      </Wrapper>
    </MyContext.Provider>
  );
}

export default App;
