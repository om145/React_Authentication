import { BrowserRouter , Routes , Route } from "react-router-dom" ;
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { Service } from "./components/Pages/Service";
import { SignIn } from "./components/Pages/SignIn";
import { LogIn } from "./components/Pages/LogIn";
import { Navbar } from "./components/Navbar/Navbar";


const App = () => {
  return (<>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/LogIn" element={<LogIn/>} />
      </Routes>
    </BrowserRouter>
    {/* <h3>hello</h3> */}
  </>)
}

export default App;
