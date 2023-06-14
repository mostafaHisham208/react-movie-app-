import './link.css'

export default function Link(props){
   
    console.log(props);

    return <>
    <a style={{backgroundColor:'green',textDecoration:'none',fontSize:'20px',
    color:'white'}}
     className="myLink" href={props.href}>{props.name}</a>
    </> 


}



// const Link=()=>{



// }


// const Link=function(){


// }