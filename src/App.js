import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import ViewAllVisitor from './components/ViewAllVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddVisitor/>}/>
      <Route path='/view' element={<ViewAllVisitor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
