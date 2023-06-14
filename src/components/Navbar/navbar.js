import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./navbar.css"
import { useSelector } from 'react-redux';
import { langContext } from '../../contexts/lang';

// import { useSelector } from 'react-redux';
const Header = () => {
  // const language = useSelector((state) => state.lang.lang)
  const [count, setCount] = useState();
  const favo = useSelector((state) => state.favo.favo);
  const {lang}=useContext(langContext)
  useEffect(() => {
    setCount(favo.length);
  }, [favo]);

    
        return (
      <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src='./images/logo.png' alt='' width={"40px"}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links m-1 w-100">

              <NavLink className={'navv'} to='/'><button className='btn btn-outline-info'> movies</button></NavLink> 
              <NavLink className={'navv'}to={'/favor'} > <button className='btn btn-outline-info'> <div className='d-inline'>favoirtes</div> 
                  {count>0 ? <div className='favcount'>  {count} </div>   : ''}
               </button></NavLink> 
              <NavLink className={'navv'} to='/login'>   <button className='btn btn-outline-info'> login   </button></NavLink> 
              <NavLink className={'navv'} to='/regis'     >   <button className='btn btn-outline-info'>register</button></NavLink> 
              <div className='text-white'>{lang}</div>      


          
         
          </Nav>
          {/* <h3 className='text-primary'> {language} </h3> */}
          {/**/}
        </Navbar.Collapse>
      </Container>
     </Navbar>
       

        );
    
}
export default Header;
