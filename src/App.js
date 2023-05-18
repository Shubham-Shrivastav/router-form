
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Form from './components/Home';
import Formdata, { About } from './components/Formdata';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Form />}>
          </Route>
          <Route path='formdata' element={<Formdata />}>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;