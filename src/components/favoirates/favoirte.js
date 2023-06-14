import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Removefavorite } from '../../store/actions/favoirte';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import"./favoirte.css"
import"../products/prod.css"

const apiimage = 'https://image.tmdb.org/t/p/w500/';

export default function Favorites() {

    const [count, setCount] = useState();

    const favo = useSelector((state) => state.favo.favo);
    const dispatch = useDispatch();
    useEffect(() => {
      setCount(favo.length);
    }, [favo]);
    function handelDelete(ItemId) {
      let deleted = favo.filter((f) => f.id !== ItemId);
      dispatch(Removefavorite(deleted));
    }
   
 
    return (
        
        <div className='content'>
         
             <div className='favcontent d-flex'>
        {favo.map((ele, index) => {        
                return <div key={index} className='card m-3'>
                <img className='w-100 h-75' alt='' src={apiimage + ele.backdrop_path} />
           
                <div className='cardbody bg-secondary h-25'>
                    <Link className='w-50 h-50 m-2' to={`/details/${ele.id}`}><button className='btn btn-outline-dark w-100 h-100'>view</button> </Link>
                    <FontAwesomeIcon icon={faTrash} className='delbtn' onClick={()=>{handelDelete(ele.id)}} style={{color: "#cd0a13",}} />
                   
                </div>
            </div>  
            
        })
    }
        </div>
        </div>
  )
};
