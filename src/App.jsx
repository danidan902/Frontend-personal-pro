import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginRegister from './LoginRegister.jsx'
  function App() {
    return (
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<LoginRegister/>} />
       </Routes>
      </BrowserRouter>
    )
  }
  
  export default App