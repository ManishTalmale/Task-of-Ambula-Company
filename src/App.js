import './App.css';
import Nav from './components/Nav'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Todo from './components/Todo';
import Shopping from './components/Shopping';
import Contact from './components/Contact';
import ApiData from './components/ApiData';
import FormValidation from './components/FormValidation';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/todo' element={<Todo />}></Route>
      <Route path='/cart' element={<Shopping />}></Route>
      <Route path='/apidata' element={<ApiData />}></Route>
      <Route path='/form' element={<FormValidation />}></Route>      
     </Routes>
    </div>
  );
}

export default App;
