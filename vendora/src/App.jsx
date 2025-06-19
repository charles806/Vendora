import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/index'
import Home from './Pages/Home/index';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
