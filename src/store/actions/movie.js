import axiosInstance from "../../axioesConf/axiosInstavce";


export default function changeMovies(){

    return (dispatch)=>{
        axiosInstance.get("/movie/popular", {
            params: {
            // api_key: "b328928619278c66403779d6d97e8635", page: "1"

            }

        }).then((res) => {
            dispatch({type:'SET_MOVIE',payload:res.data.results});
            console.log(res.data.results);
        }).catch((err) => {

            console.log(err);
        })

    }
}