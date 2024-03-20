import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Admin/User/Home';
import Login from './pages/Admin/User/Login';
import Signup from './pages/Admin/User/Signup';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/ " element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
         
    </BrowserRouter>
  )
}

export default App