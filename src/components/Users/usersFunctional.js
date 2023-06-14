import React, { useState ,useEffect} from 'react';

const UsersFunctional = () => {

          const [users,setUsers] = useState( [
                { name: "Ali", email: "ali@gmail.com" ,isActive: true},
                { name: "Salma", email: "Salma@gmail.com" ,isActive: true},
                { name: "Walaa", email: "Walaa@gmail.com",isActive: false },
                { name: "Ahmed", email: "Ahmed@gmail.com",isActive: true },
            ])

           const [isAuth, setAuth]   = useState(false)

           useEffect(()=>{//Mounting

            console.log("Did Mount");

            return ()=>{//Un Mounting
                 console.log("UnMount");
            }
           },[])


           useEffect(()=>{//UPDATING


            console.log('Did Update');

           },[isAuth])

           useEffect(()=>{

           },[users])

           const toggle=()=>{

            
            setAuth(!isAuth);


           }

    return (
      <>
      {isAuth ? <ul>
      {users.map((user,i)=>{
         if(user.isActive){
            return <li key={i}>{user.name}</li>
         }
      })}
      </ul> : <p>You must Login First</p>}

      <button onClick={()=>{toggle() }} className='btn btn-primary'>Toggle</button>
     
      </>
    );
}

export default UsersFunctional;
