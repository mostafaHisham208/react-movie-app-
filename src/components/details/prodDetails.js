import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axiosInstance from '../../axioesConf/axiosInstavce';
import { NavLink } from 'react-router-dom';
import './details.css'
import YouTube from 'react-youtube';
const apiimage='https://image.tmdb.org/t/p/w500/';
var showvideo=false;
const MoviesDetails = () => {
    const params = useParams()
    const [movie,setmovie]= useState({})
    const [movieV,setmovieV]= useState([])
  useEffect(() => {
        axiosInstance.get(`/movie/${params.id}`,{
        //    headers:{'Content-Type':'application.json'},
        params:{api_key:"b328928619278c66403779d6d97e8635"}

        }).then((data) => {

            // console.log(data.data);
            setmovie(data.data)


        }).catch((err) => {
            console.log(err);
        })
  })
  const movievideo=()=>{
    axiosInstance.get(`/movie/${params.id}?api_key=b328928619278c66403779d6d97e8635&append_to_response=videos`,{
     

        }).then((data) => {
            const d=data.data.videos.results.find((vid)=>vid.name ==='Official Trailer')
            console.log(data);   
            if(d)  {
                setmovieV(d)
                // console.log(d);
               }
               console.log(d);

              // console.log("aaaaaa"); 

        }).catch((err) => {
            console.log(err);
        })

  }
  const toglevideo=()=>{
    showvideo=!showvideo
  }

  return (
    <div className='deta'>
        <div className='m-5 me-5'>
       {showvideo?<div className='videotag'><YouTube  videoId={movieV.key} /></div> 
       :<div className='videotag'> <img className='w-100' src= {apiimage+movie.backdrop_path} key={movie.backdrop_path} alt='' /> </div>}

        {/*  */}
        </div>
        
        <div className='col-3 m-5 '>
        <h3>movie title: {movie.title}</h3>
        <h5>movieoverview :{movie.overview}</h5>
        <h5>the budget: {movie.budget}$</h5>

         <div>
         <button className='btn btn-info h-50' onClick={movievideo}>
         <button className='btn btn-info' onClick={toglevideo}>view demo</button>
         </button>
        <NavLink className={'linkl'} to={movie.homepage}>
           <button type='button'  className='btn btn-info'>watch it</button> 
           </NavLink> 
         </div>
        </div>
       
       
    </div>
);


}

export default MoviesDetails