import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Screens/Home";
import Contacts from "./Screens/Contacts";
import TopBar from './components/topBAR'
function App() {
  return (
    <div className="">
      
      <Router>
        <TopBar />
        <Routes>
          <Route />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    
    </div>
  );  
}

export default App