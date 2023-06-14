import './App.css';
import Header from './components/Navbar/navbar';

import AddUser from './components/addUser/addUser';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { Route,Routes } from 'react-router-dom';
import About from "./components/aboutus/aboutus";
import Movies from './components/products/products';
import MoviesDetails from './components/details/prodDetails';
import Login from './components/addUser/login';
// import { CounterProvider } from './contexts/counter';
import { LangProvider } from './contexts/lang';

// import Counter from './pages/counter/counter';
import Favoirte from './components/favoirates/favoirte';

function App() {
  // const [counter,setCounter]= useState(0)
  const [lang,setlang]= useState('')
return (
  <div>

    <LangProvider value={{lang,setlang}}>

    <div 
   dir={`${lang=='english'?'rtl':'ltr'}`  } 
   className={`${lang=='english'?'text-left':'text-right'}`}
  >

   <Header/>
    <Routes >
      <Route path='/regis'  element={<AddUser/>}/>
      <Route  path='/about' element={<About/>}  />
      <Route  path='/login' element={<Login/>}  />
      <Route path='/details/:id' element={<MoviesDetails/>}></Route>
      <Route path='/'  element={<Movies/>}></Route>
      <Route path='/favor' element={<Favoirte/>}></Route>
    </Routes>
    </div>
</LangProvider>

 
   
   
    </div>
  );
}

export default App;
