
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './component/Landing'
import Mainpage from './component/Mainpage'
import Splash from './component/splash';


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Splash/>}/>
      <Route path="/wedding" element={<Mainpage />}/>
        </Routes>
        </BrowserRouter>
 
  )
}

export default App
