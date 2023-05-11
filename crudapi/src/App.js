
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './component/Create';
import Read from './component/Read';
import Edit from './component/Edit';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Read />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
