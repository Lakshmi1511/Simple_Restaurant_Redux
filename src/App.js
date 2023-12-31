import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home';
import RestView from './components/RestView';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='' element={<Home></Home>}/>
      <Route path='viewrest/:id' element={ <RestView></RestView>}/>
      </Routes>    
      <Footer></Footer>
    </div>
  );
}

export default App;
