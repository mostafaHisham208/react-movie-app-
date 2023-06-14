import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./prod.css"
import { useSelector, useDispatch } from 'react-redux';
import changeLanguage from './../../store/actions/language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Removefavorite } from '../../store/actions/favoirte';
import axiosInstance from '../../axioesConf/axiosInstavce';
import addToFavorite from '../../store/actions/favoirte';
// import changeMovies from '../../store/actions/movie';
import { langContext } from '../../contexts/lang';




const apiimage = 'https://image.tmdb.org/t/p/w500/';
const Movies = () => {
    const fav = useSelector((state) => state.favo.favo);

    const dispatch = useDispatch();

    function addFavorites(movie, movid) {
        if (fav.includes(movie)) {
            let deleted = fav.filter((f) => f.id !== movid);
            dispatch(Removefavorite(deleted));
        }
        else {
            dispatch(addToFavorite(Array.from([...fav, movie])));
        }
    }

    const language = useSelector((state) => state.lang.lang)


    const [Movie, setMovies] = useState([])
    // const Movie = useSelector((state) => state.movies.movies)
    const [search, setSearch] = useState('')
    const [page, setpage] = useState()

    var { lang, setlang } = useContext(langContext)

    useEffect(() => {
        // dispatch(changeMovies())

        axiosInstance.get('/movie/popular', {
            params: {
                api_key: "b328928619278c66403779d6d97e8635", page: "1"
                }

        }).then((data) => {

            // console.log(data);
            setMovies(data.data.results)
            setpage(data.data.page)

        }).catch((err) => {
            console.log(err);
        })





    }, [])

    const nextpage = () => {
        axiosInstance.get(`/movie/popular?api_key=b328928619278c66403779d6d97e8635&page=${page + 1}`)
            .then((res) => {
                console.log(res);
                setMovies(res.data.results);
                setpage(res.data.page)

            }).catch((err) => {
                console.log(err);
            })

    }
    const prevpage = () => {
        axiosInstance.get(`/movie/popular?api_key=b328928619278c66403779d6d97e8635&page=${page - 1}`)
            .then((res) => {
                console.log(res);
                setMovies(res.data.results);
                setpage(res.data.page)

            }).catch((err) => {
                console.log(err);
            })

    }
    const searchMovie = (e) => {
        e.preventDefault();
        if (e.target.value === '') {
            axiosInstance.get('/movie/popular', {
                //    headers:{'Content-Type':'application.json'},
                params: {
                    api_key: "b328928619278c66403779d6d97e8635", page: "1"
                }

            }).then((data) => {

                // console.log(data);
                setMovies(data.data.results)
                setpage(data.data.page)
            }).catch((err) => {
                console.log(err);
            })

        }
        else {
            axiosInstance.get(`/search/movie?api_key=b328928619278c66403779d6d97e8635&query=${search}`)
                .then((response) => {
                    //  console.log(response);
                    setMovies(response.data.results);

                }).catch((err) => {
                    console.log(err);
                })

        }
    }
    const handlesearch = (e) => {
        setSearch(e.target.value)

    }
    const handleChange = () => {

        dispatch(changeLanguage(language === 'en' ? 'ar' : 'en'))
    }
    const options = [
        { value: 'English', text: 'English ' },
        { value: 'Arabic', text: 'Arabic ' },
    ];

    const [selected, setSelected] = useState(options[0].value);
    const handelselect = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        setlang(event.target.value);
    };

    return (

        <div>
            <form className='p-3 w-100 bg-secondary'
                onSubmit={searchMovie}
            >
                <input
                    placeholder='search movie'
                    onChange={handlesearch}
                    name='search'
                    value={search}
                    className='w-50'
                />

                <button type='submit' className='btn btn-outline-dark m-3'> search</button>
                <button onClick={searchMovie} className='btn btn-outline-dark m-3'>reset</button>

                {/* <h1>App Language is : {language}</h1>
                <  button onClick={() => { handleChange() }} className='btn btn-success'>change language</button> */}
          
            </form>
          
            <div className='d-flex bg-dark'>
            <div className='m'>
                    <select value={selected} onChange={handelselect}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                   <div className='text-white'> {lang}</div> 

                </div>
                {Movie.map((mov, index) => {

                    return <div key={index} className='card m-3'>
                        <img className='imgclass w-100 h-75' alt='' src={apiimage + mov.backdrop_path} />

                        <div className='cardbody bg-secondary h-25 d-flex'>

                            <Link className='w-50 h-50 m-2 ' to={`/details/${mov.id}`}><button className='btn btn-outline-dark w-100 h-100'>view</button> </Link>
                            {fav.includes(mov) ? <FontAwesomeIcon className='starbtn' onClick={() => { addFavorites(mov, mov.id) }} icon={faStar} style={{ color: "#f0c219", }} /> :
                                <FontAwesomeIcon className='starbtn' onClick={() => { addFavorites(mov, mov.id) }} icon={faStar} style={{ color: "white", }} />
                            }
                        </div>
                    </div>





                })}
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-info m-5' onClick={prevpage}>pre</button>
                <button className='btn btn-info m-5'>{page}</button>
                <button className='btn btn-info m-5' onClick={nextpage}>next</button>

            </div>
        </div>
    );
}

export default Movies;
