import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Screen1 from './Screen1/Screen1';
import Screen2 from './Screen2/Screen2';
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <BrowserRouter>
    <div>
      <ToastContainer position='bottom-center' limit={1} />
      <Routes>
        <Route path='/' element={<Screen1 />} />
        <Route path='/screen2' element={<Screen2/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;