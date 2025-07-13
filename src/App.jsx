import { Routes, Route} from 'react-router-dom'
import LoginRegister from './LoginRegister.jsx'
import Thankyou from './Thankyou.jsx'
  function App() {
    return (
   
       <Routes >
        <Route path='/' element={<LoginRegister/>} />
        <Route path='/thankyou' element={<Thankyou/>}/>
       </Routes>
     
    )
  }
  
  export default App